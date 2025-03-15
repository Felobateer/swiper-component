import { TestBed } from '@angular/core/testing';

import { CyranoShowcaseService } from './cyrano-showcase.service';

describe('CyranoShowcaseService', () => {
  let service: CyranoShowcaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CyranoShowcaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
