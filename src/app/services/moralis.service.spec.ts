/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MoralisService } from './moralis.service';

describe('Service: Moralis', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoralisService]
    });
  });

  it('should ...', inject([MoralisService], (service: MoralisService) => {
    expect(service).toBeTruthy();
  }));
});
