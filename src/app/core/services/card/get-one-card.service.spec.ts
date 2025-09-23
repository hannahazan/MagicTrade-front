import { TestBed } from '@angular/core/testing';

import { GetOneCardService } from './get-one-card.service';

describe('GetOneCardService', () => {
  let service: GetOneCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetOneCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
