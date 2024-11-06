import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocateInterventionRequestComponent } from './allocate-intervention-request.component';

describe('AllocateInterventionRequestComponent', () => {
  let component: AllocateInterventionRequestComponent;
  let fixture: ComponentFixture<AllocateInterventionRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllocateInterventionRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllocateInterventionRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
