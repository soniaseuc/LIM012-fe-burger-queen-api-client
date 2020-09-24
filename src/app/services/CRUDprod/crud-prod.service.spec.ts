import { TestBed } from '@angular/core/testing';

import { CrudProdService } from './crud-prod.service';

describe('CrudProdService', () => {
  let service: CrudProdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudProdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
