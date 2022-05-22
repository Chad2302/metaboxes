/* eslint-disable no-underscore-dangle */
import { Inject, Injectable } from '@angular/core';
import { JsonRpcSigner, Web3Provider } from '@ethersproject/providers';
import { Web3ModalService } from '@mindsorg/web3modal-angular';
import { firstValueFrom, Observable, ReplaySubject, take } from 'rxjs';
import { ethers } from 'ethers';
import { CHAINS, IChain } from '../public-api';

@Injectable()
export class BlockchainService {

  public _signer: JsonRpcSigner = null;
  private _eth = (window as any).ethereum;

  private _provider: Web3Provider = null;


  private _currentChain: ReplaySubject<IChain> = new ReplaySubject<IChain>(1);
  private _currentAddress: ReplaySubject<string> = new ReplaySubject<string>(1);

  constructor(
    @Inject(CHAINS) private _chains: CHAINS,
    private _web3modalService: Web3ModalService,
  ) {
    this._initialize();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  get currentChain$(): Observable<IChain> {
    return this._currentChain.asObservable();
  }

  get currentAddress$(): Observable<string> {
    return this._currentAddress.asObservable();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  async connectWallet(): Promise<void> {
    let provider = null;
    try {
      provider = await this._web3modalService.open();
    } catch (e) {
      console.error('Could not get a wallet connection', e);
      // this._snackbar.open('An error occurred');
      return;
    }
    await this._setUpProviderSigner(provider);
  }

  async disconnect(): Promise<void> {
    if (this._provider) {
      this._provider.removeAllListeners();
      this._eth.removeAllListeners();
      this._provider = null;
      this._signer = null;

      this._currentChain.next(null);
      this._currentAddress.next(null);
    }

    return Promise.resolve();
  }

  getSigner(){
    return this._signer;
  }

  async switchChain(chain: IChain | number, fromWallet?: true): Promise<void> {
    try {
      const desiredChain = this._chains[(typeof chain === 'number' ? chain : chain.id)];
      if (!desiredChain) {
        this._currentChain.next(null);
        // this._snackbar.open('Unsupported chain selected!');
        return;
      }

      // this._snackbar.open(`Switching to ${desiredChain.name}`);

      // Attempt to switch chains
      const currentChain = await firstValueFrom(this.currentChain$.pipe(take(1))) as any;
      const successfulSwitch = false;
      if (!fromWallet && currentChain?.id !== desiredChain.id) {
        console.error('Attempted to switch chain from the frontend application. Not available');
        // this._snackbar.open('Switching chains from the application is not yet available. Please use Metamask in the meantime');
      }

      if (successfulSwitch || fromWallet) {
        // On success
        this._currentChain.next(desiredChain);
        // this._snackbar.open(`Connected to ${desiredChain.name}`);
      }
    } catch (e) {
      console.error('Failed to switch chains', e);
      // this._snackbar.open('An error occurred');
      return;
    }
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------

  private async _initialize(): Promise<void> {
    this._currentChain.next(null);
    this._currentAddress.next(null);
    console.log('initialized');
  }

  private async _setUpProviderSigner(provider: any): Promise<void> {
    if (this._provider) {
      this._provider.removeAllListeners();
      this._eth.removeAllListeners();
    }

    this._provider = new Web3Provider(provider, 'any');
    this._signer = this._provider.getSigner();

    this.switchChain((await this._signer.getChainId()), true);
    this._switchAddress((await this._signer.getAddress()));

    this._subscribeToWalletEvents();
  }

  private _subscribeToWalletEvents(): void {
    this._provider.on('network', newNetwork => this.switchChain(newNetwork.chainId, true));
    this._eth.on('accountsChanged', accounts => this._switchAddress(accounts[0]));
  }

  private async _switchAddress(address: string): Promise<void> {
    try {
      this._currentAddress.next(address.toLowerCase());
    } catch (e) {
      console.error(e);
    }
  }
}
