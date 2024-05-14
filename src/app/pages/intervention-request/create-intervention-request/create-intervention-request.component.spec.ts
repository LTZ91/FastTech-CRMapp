import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInterventionRequestComponent } from './create-intervention-request.component';

describe('CreateInterventionRequestComponent', () => {
  let component: CreateInterventionRequestComponent;
  let fixture: ComponentFixture<CreateInterventionRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateInterventionRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateInterventionRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
