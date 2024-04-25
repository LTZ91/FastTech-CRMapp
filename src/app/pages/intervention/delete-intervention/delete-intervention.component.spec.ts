import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteInterventionComponent } from './delete-intervention.component';

describe('DeleteInterventionComponent', () => {
  let component: DeleteInterventionComponent;
  let fixture: ComponentFixture<DeleteInterventionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteInterventionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteInterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
