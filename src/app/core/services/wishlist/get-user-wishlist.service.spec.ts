import { TestBed } from '@angular/core/testing';

import { GetUserWishlistService } from './get-user-wishlist.service';

describe('GetUserWishlistService', () => {
  let service: GetUserWishlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetUserWishlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
