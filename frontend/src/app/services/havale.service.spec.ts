import { TestBed } from '@angular/core/testing';

import { HavaleService } from './havale.service';

describe('HavaleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HavaleService = TestBed.get(HavaleService);
    expect(service).toBeTruthy();
  });
});
