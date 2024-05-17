import { TestBed } from '@angular/core/testing';

import { InterventionStatusService } from './intervention-status.service';

describe('InterventionStatusService', () => {
  let service: InterventionStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterventionStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
