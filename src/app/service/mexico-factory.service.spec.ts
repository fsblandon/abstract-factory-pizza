import { TestBed } from '@angular/core/testing';

import { MexicoFactoryService } from './mexico-factory.service';

describe('MexicoFactoryService', () => {
  let service: MexicoFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MexicoFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
