import { TestBed } from '@angular/core/testing';

import { DovizService } from './doviz.service';

describe('DovizService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DovizService = TestBed.get(DovizService);
    expect(service).toBeTruthy();
  });
});
