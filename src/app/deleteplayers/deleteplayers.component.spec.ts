import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteplayersComponent } from './deleteplayers.component';

describe('DeleteplayersComponent', () => {
  let component: DeleteplayersComponent;
  let fixture: ComponentFixture<DeleteplayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteplayersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteplayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
