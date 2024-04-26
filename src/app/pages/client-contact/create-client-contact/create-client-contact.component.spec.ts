import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClientContactComponent } from './create-client-contact.component';

describe('CreateClientContactComponent', () => {
  let component: CreateClientContactComponent;
  let fixture: ComponentFixture<CreateClientContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateClientContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateClientContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
