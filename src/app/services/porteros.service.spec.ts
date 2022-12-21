import { TestBed } from '@angular/core/testing';

import { PorterosService } from './porteros.service';

describe('PorterosService', () => {
  let service: PorterosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PorterosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
