import { TestBed } from '@angular/core/testing';

import { GetAllCardsService } from './get-all-cards.service';

describe('GetAllCardsService', () => {
  let service: GetAllCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
