import { TestBed } from '@angular/core/testing';
import { Moeda } from './moeda.service';

describe('Moeda', () => {
  let service: Moeda;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Moeda);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});