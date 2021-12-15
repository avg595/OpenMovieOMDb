import { TestBed } from '@angular/core/testing';

import { MovieResultService } from './movie-result.service';

describe('MovieResultService', () => {
  let service: MovieResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieResultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
