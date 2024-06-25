import { TestBed } from '@angular/core/testing';

import { FinanzService } from './finanz.service';

describe('FinanzService', () => {
  let service: FinanzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinanzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
