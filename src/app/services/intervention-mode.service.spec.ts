import { TestBed } from '@angular/core/testing';

import { InterventionModeService } from './intervention-mode.service';

describe('InterventionModeService', () => {
  let service: InterventionModeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterventionModeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
