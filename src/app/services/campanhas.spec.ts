import { TestBed } from '@angular/core/testing';

import { Campanhas } from './campanhas';

describe('Campanhas', () => {
  let service: Campanhas;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Campanhas);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
