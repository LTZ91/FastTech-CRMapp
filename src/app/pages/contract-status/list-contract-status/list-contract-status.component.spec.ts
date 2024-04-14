import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContractStatusComponent } from './list-contract-status.component';

describe('ListContractStatusComponent', () => {
  let component: ListContractStatusComponent;
  let fixture: ComponentFixture<ListContractStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListContractStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListContractStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
