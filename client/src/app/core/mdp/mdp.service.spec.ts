import { TestBed } from '@angular/core/testing';

import { MdpService } from './mdp.service';

describe('MdpService', () => {
  let service: MdpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MdpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
