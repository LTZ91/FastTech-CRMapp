import { TestBed } from '@angular/core/testing';

import { InterventionRequestService } from './intervention-request.service';

describe('InterventionRequestService', () => {
  let service: InterventionRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterventionRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
