import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHourComponent } from './create-hour.component';

describe('CreateHourComponent', () => {
  let component: CreateHourComponent;
  let fixture: ComponentFixture<CreateHourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateHourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
