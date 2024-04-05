import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteHourComponent } from './delete-hour.component';

describe('DeleteHourComponent', () => {
  let component: DeleteHourComponent;
  let fixture: ComponentFixture<DeleteHourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteHourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
