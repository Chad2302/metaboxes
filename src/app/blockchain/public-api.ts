import { InjectionToken } from '@angular/core';

export * from './blockchain.module';
export * from './services/blockchain.service';

export interface IChain {
  id: number;
  name: string; 
  explorerUrl: string;
  symbol: string;
}

export const NETWORKS: { [x: number]: IChain } = {
  1: { id: 1, name: 'Ethereum', explorerUrl: 'https://etherscan.io/', symbol: 'assets/images/crypto/eth.png' },
  // 3: { id: 3, name: 'Ropsten Testnet', explorerUrl: 'https://ropsten.etherscan.io/', symbol: 'assets/images/crypto/eth.png' },
  4: { id: 4, name: 'Rinkeby Testnet', explorerUrl: 'https://rinkeby.etherscan.io/', symbol: 'assets/images/crypto/eth.png' },
  137: { id: 137, name: 'Polygon', explorerUrl: 'https://polygonscan.com/', symbol: 'assets/images/crypto/matic.png' },
  80001: { id: 80001, name: 'Polygon Testnet', explorerUrl: 'https://mumbai.polygonscan.com/', symbol: 'assets/images/crypto/matic.png' },
  56: { id: 56, name: 'BSC', explorerUrl: 'https://bscscan.com/', symbol: 'assets/images/crypto/bsc.png' },
  97: { id: 97, name: 'BSC Testnet', explorerUrl: 'https://testnet.bscscan.com/', symbol: 'assets/images/crypto/bsc.png' }
};

export type CHAINS = typeof NETWORKS;
export const CHAINS = new InjectionToken<CHAINS>('BlockchainNetworks', {
  factory: (): any => NETWORKS
});
