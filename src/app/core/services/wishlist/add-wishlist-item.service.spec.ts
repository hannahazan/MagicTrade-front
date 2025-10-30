import { TestBed } from '@angular/core/testing';

import { AddWishlistItemService } from './add-wishlist-item.service';

describe('AddWishlistItemService', () => {
  let service: AddWishlistItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddWishlistItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
