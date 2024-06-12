import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendInterventionReportComponent } from './send-intervention-report.component';

describe('SendInterventionReportComponent', () => {
  let component: SendInterventionReportComponent;
  let fixture: ComponentFixture<SendInterventionReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SendInterventionReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SendInterventionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
