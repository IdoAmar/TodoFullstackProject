import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemAdderComponent } from './list-item-adder.component';

describe('ListItemAdderComponent', () => {
  let component: ListItemAdderComponent;
  let fixture: ComponentFixture<ListItemAdderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListItemAdderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
