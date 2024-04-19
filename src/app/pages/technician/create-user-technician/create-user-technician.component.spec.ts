import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserTechnicianComponent } from './create-user-technician.component';

describe('CreateUserTechnicianComponent', () => {
  let component: CreateUserTechnicianComponent;
  let fixture: ComponentFixture<CreateUserTechnicianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateUserTechnicianComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateUserTechnicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
