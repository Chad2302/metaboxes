import { MoralisService } from './../../services/moralis.service';
import { BoxesService } from './../../blockchain/services/boxes.service';
import { Router, RouterModule } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/blockchain';
import { ethers } from 'ethers';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  main = '0xAD98e1e67292C641534968EdfBC24d1E45d874c8';
  events = [
  ];
  nfts: any;
  nftDetails;
  showNfts = false;
  sevents = 0;
  constructor(private boxes: BoxesService, public user: UserService, private router: Router, private m: MoralisService) { }

  ngOnInit() {

  }

  async getBoxes() {
    this.nftDetails = await this.m.getNfts('0x51df7b838a61d95b3f7508ac84316f4daf656302');
    // this.nfts = ;
    this.processNfts(this.nftDetails.result);
    console.log(this.nfts);
    // await this.boxes.getAvalibleBoxes();
  }

  processNfts(nfs) {
    this.nfts = {};
    nfs.forEach(el => {
      if (!this.nfts[el.token_address]) {
        this.nfts[el.token_address] = [];
      }
      this.nfts[el.token_address].push(el);
    });
  }


}
