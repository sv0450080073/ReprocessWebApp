import { TestBed } from '@angular/core/testing';

import { ErrorCodeService } from './error-code.service';

describe('ErrorCodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrorCodeService = TestBed.get(ErrorCodeService);
    expect(service).toBeTruthy();
  });
});
