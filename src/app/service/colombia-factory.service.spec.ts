import { TestBed } from '@angular/core/testing';

import { ColombiaFactoryService } from './colombia-factory.service';

describe('ColombiaFactoryService', () => {
  let service: ColombiaFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColombiaFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
