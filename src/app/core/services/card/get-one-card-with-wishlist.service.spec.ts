import { TestBed } from '@angular/core/testing';

import { GetOneCardWithWishlistService } from './get-one-card-with-wishlist.service';

describe('GetOneCardWithWishlistService', () => {
  let service: GetOneCardWithWishlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetOneCardWithWishlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
