import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlPresenterComponent } from './header-presenter.component';

describe('UrlPresenterComponent', () => {
  let component: UrlPresenterComponent;
  let fixture: ComponentFixture<UrlPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlPresenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
