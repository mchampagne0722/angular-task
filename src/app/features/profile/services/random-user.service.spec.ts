import { TestBed } from '@angular/core/testing';

import { RandomUserService } from './random-user.service';

describe('ProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomUserService = TestBed.get(RandomUserService);
    expect(service).toBeTruthy();
  });
});
