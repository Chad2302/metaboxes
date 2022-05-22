/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BoxesService } from './boxes.service';

describe('Service: Boxes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoxesService]
    });
  });

  it('should ...', inject([BoxesService], (service: BoxesService) => {
    expect(service).toBeTruthy();
  }));
});
