import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInterventionReportComponent } from './create-intervention-report.component';

describe('CreateInterventionReportComponent', () => {
  let component: CreateInterventionReportComponent;
  let fixture: ComponentFixture<CreateInterventionReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateInterventionReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateInterventionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
