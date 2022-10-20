import { TestBed } from '@angular/core/testing';

import { CorretorServiceService } from './corretor-service.service';

describe('CorretorServiceService', () => {
  let service: CorretorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorretorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
