import { takeUntil, Subject } from 'rxjs';
import { BlockchainService } from './../blockchain/services/blockchain.service';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, Injectable, ViewEncapsulation } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy {
  currentAddress: string;

  private unsubscribeAll: Subject<any> = new Subject<any>();
  constructor(public bs: BlockchainService) {
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
