import { BlockchainService } from './blockchain/services/blockchain.service';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy{
  public appPages = [
    { title: 'Home', url: '/home', icon: 'mail' },
    { title: 'Events', url: '/events', icon: 'paper-plane' },
    { title: 'My Events', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  currentAddress: string;

  private unsubscribeAll: Subject<any> = new Subject<any>();


  constructor(
    public bs: BlockchainService
  ) { }

  async connect() {
    this.bs.connectWallet();
  }

  ngOnInit(): void {
    this.bs.currentAddress$
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((address: string) => {
        this.currentAddress = address;
        console.log(address);
        // this._changeDetectorRef.markForCheck();
      });
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next(null);
    this.unsubscribeAll.complete();
  }

}
