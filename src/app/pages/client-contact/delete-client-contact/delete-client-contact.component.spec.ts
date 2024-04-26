import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteClientContactComponent } from './delete-client-contact.component';

describe('DeleteClientContactComponent', () => {
  let component: DeleteClientContactComponent;
  let fixture: ComponentFixture<DeleteClientContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteClientContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteClientContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
