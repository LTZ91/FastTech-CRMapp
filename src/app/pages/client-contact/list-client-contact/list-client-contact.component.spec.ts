import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClientContactComponent } from './list-client-contact.component';

describe('ListClientContactComponent', () => {
  let component: ListClientContactComponent;
  let fixture: ComponentFixture<ListClientContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListClientContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListClientContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
