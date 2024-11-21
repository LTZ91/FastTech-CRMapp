import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInterventionRequestStatusComponent } from './list-intervention-request-status.component';

describe('ListInterventionRequestStatusComponent', () => {
  let component: ListInterventionRequestStatusComponent;
  let fixture: ComponentFixture<ListInterventionRequestStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListInterventionRequestStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListInterventionRequestStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
