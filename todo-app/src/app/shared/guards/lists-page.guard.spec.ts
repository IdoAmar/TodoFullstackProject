import { TestBed } from '@angular/core/testing';

import { ListsPageGuard } from './lists-page.guard';

describe('ListsPageGuard', () => {
  let guard: ListsPageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ListsPageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
