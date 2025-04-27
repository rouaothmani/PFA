import { TestBed } from '@angular/core/testing';

import { InscService } from './insc.service';

describe('InscService', () => {
  let service: InscService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InscService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
