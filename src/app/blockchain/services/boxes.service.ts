import { METABOX_V1 } from './../contracts/ABIs/METABOX';
import { BlockchainService } from '..';
import { Injectable } from '@angular/core';
import { ethers } from 'ethers';

@Injectable({
  providedIn: 'root'
})
export class BoxesService {

  address = '';
  constructor(private bs: BlockchainService) {

  }

  async getAvalibleBoxes() {
    const signer = this.bs.getSigner();
    const cont = new ethers.Contract(this.address, METABOX_V1.abi, signer);
    try {
      const data = await cont.getAvalibleBoxes();
      return data;
    }
    catch (e) {
      console.error('Failed', e);
      return Promise.reject({ status: 1, message: e });
    }
  }

  async getBoxInformation(box) {
    const signer = this.bs.getSigner();
    const cont = new ethers.Contract(this.address, METABOX_V1.abi, signer);
    try {
      const data = await cont.getBoxInformation(box);
      return data;
    }
    catch (e) {
      console.error('Failed', e);
      return Promise.reject({ status: 1, message: e });
    }
  }

  async buyBox(box) {
    const signer = this.bs.getSigner();
    const cont = new ethers.Contract(this.address, METABOX_V1.abi, signer);
    try {
      const txHash = await cont.buyBox(box);
      return txHash;
    }
    catch (e) {
      return Promise.reject({ status: 1, message: e });
    }
  }

}
