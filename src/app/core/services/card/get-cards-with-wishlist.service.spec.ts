import { TestBed } from '@angular/core/testing';

import { GetCardsWithWishlistService } from './get-cards-with-wishlist.service';

describe('GetCardsWithWishlistService', () => {
  let service: GetCardsWithWishlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCardsWithWishlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
