import { TestBed } from '@angular/core/testing';
import { Reconciliation } from './reconciliation';

describe('Reconciliation', () => {
  let service: Reconciliation;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Reconciliation);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
