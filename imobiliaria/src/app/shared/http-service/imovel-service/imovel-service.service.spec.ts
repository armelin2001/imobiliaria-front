import { TestBed } from '@angular/core/testing';

import { ImovelServiceService } from './imovel-service.service';

describe('ImovelServiceService', () => {
  let service: ImovelServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImovelServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
