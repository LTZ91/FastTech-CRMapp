import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterventionRequestItemComponent } from './intervention-request-item.component';

describe('InterventionRequestItemComponent', () => {
  let component: InterventionRequestItemComponent;
  let fixture: ComponentFixture<InterventionRequestItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InterventionRequestItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterventionRequestItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
