import { TestBed } from '@angular/core/testing';

import { InterventionReportService } from './intervention-report.service';

describe('InterventionReportService', () => {
  let service: InterventionReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterventionReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
