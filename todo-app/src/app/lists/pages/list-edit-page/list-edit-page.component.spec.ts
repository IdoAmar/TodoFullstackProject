import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEditPageComponent } from './list-edit-page.component';

describe('ListEditPageComponent', () => {
  let component: ListEditPageComponent;
  let fixture: ComponentFixture<ListEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEditPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
