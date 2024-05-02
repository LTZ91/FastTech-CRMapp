import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteInterventionReportComponent } from './delete-intervention-report.component';

describe('DeleteInterventionReportComponent', () => {
  let component: DeleteInterventionReportComponent;
  let fixture: ComponentFixture<DeleteInterventionReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteInterventionReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteInterventionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
