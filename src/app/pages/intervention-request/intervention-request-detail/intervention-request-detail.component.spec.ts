import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterventionRequestDetailComponent } from './intervention-request-detail.component';

describe('InterventionRequestDetailComponent', () => {
  let component: InterventionRequestDetailComponent;
  let fixture: ComponentFixture<InterventionRequestDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InterventionRequestDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterventionRequestDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
