import { TestBed } from '@angular/core/testing';

import { RoutingReprocessService } from './routing-reprocess.service';

describe('RoutingReprocessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoutingReprocessService = TestBed.get(RoutingReprocessService);
    expect(service).toBeTruthy();
  });
});
