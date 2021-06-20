import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemTickerComponent } from './list-item-ticker.component';

describe('ListItemTickerComponent', () => {
  let component: ListItemTickerComponent;
  let fixture: ComponentFixture<ListItemTickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListItemTickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemTickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
