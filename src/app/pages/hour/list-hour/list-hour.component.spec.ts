import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHourComponent } from './list-hour.component';

describe('ListHourComponent', () => {
  let component: ListHourComponent;
  let fixture: ComponentFixture<ListHourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListHourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
