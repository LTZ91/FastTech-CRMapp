import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteInterventionRequestComponent } from './delete-intervention-request.component';

describe('DeleteInterventionRequestComponent', () => {
  let component: DeleteInterventionRequestComponent;
  let fixture: ComponentFixture<DeleteInterventionRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteInterventionRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteInterventionRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
