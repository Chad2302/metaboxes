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

  sevents = 0;
  constructor(private boxes: BoxesService, public user: UserService, private router: Router) { }

  ngOnInit() {

  }

  async getBoxes() {
    await this.boxes.getAvalibleBoxes();
  }


}
