import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditplayersComponent } from './add-editplayers.component';

describe('AddEditplayersComponent', () => {
  let component: AddEditplayersComponent;
  let fixture: ComponentFixture<AddEditplayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditplayersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditplayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
