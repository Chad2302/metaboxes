import { BoxesService } from './services/boxes.service';
import { NgModule } from '@angular/core';

import { BlockchainService } from './services/blockchain.service';
import { Web3ModalModule, Web3ModalService } from '@mindsorg/web3modal-angular';

@NgModule({
  imports: [
    Web3ModalModule
  ],
  providers: [
    BlockchainService,
    BoxesService,
    {
      provide: Web3ModalService,
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
      useFactory: () => new Web3ModalService({
        cacheProvider: false,
        providerOptions: {},
        network: '1',
        disableInjectedProvider: false
      })
    }
  ]
})
export class BlockchainModule {

  constructor(
    private _blockchainService: BlockchainService,
    private _boxesService: BoxesService
  ) { }
}
