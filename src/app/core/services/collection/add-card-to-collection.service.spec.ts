import { TestBed } from '@angular/core/testing';

import { AddCardToCollectionService } from './add-card-to-collection.service';

describe('AddCardToCollectionService', () => {
  let service: AddCardToCollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddCardToCollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
