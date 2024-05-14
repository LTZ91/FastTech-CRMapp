import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInterventionRequestComponent } from './list-intervention-request.component';

describe('ListInterventionRequestComponent', () => {
  let component: ListInterventionRequestComponent;
  let fixture: ComponentFixture<ListInterventionRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListInterventionRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListInterventionRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
