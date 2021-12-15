import { TestBed } from '@angular/core/testing';

import { ApiOmdbapiService } from './api-omdbapi.service';

describe('ApiOmdbapiService', () => {
  let service: ApiOmdbapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiOmdbapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
