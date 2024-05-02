import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInterventionReportComponent } from './list-intervention-report.component';

describe('ListInterventionReportComponent', () => {
  let component: ListInterventionReportComponent;
  let fixture: ComponentFixture<ListInterventionReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListInterventionReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListInterventionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
