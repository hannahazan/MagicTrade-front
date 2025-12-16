import { TestBed } from '@angular/core/testing';

import { DeleteWishlistItemService } from './delete-wishlist-item.service';

describe('DeleteWishlistItemService', () => {
  let service: DeleteWishlistItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteWishlistItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
