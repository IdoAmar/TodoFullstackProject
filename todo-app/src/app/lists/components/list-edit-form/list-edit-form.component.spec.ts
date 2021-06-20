import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEditFormComponent } from './list-edit-form.component';

describe('ListEditFormComponent', () => {
  let component: ListEditFormComponent;
  let fixture: ComponentFixture<ListEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
