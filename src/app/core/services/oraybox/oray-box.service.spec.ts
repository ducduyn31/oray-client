import { TestBed } from '@angular/core/testing';

import { OrayBoxService } from './oray-box.service';

describe('OrayBoxService', () => {
  let service: OrayBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrayBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
