import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateContractStatusComponent } from './create-contract-status.component';

describe('CreateContractStatusComponent', () => {
  let component: CreateContractStatusComponent;
  let fixture: ComponentFixture<CreateContractStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateContractStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateContractStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
