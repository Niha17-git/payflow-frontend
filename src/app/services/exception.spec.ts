import { TestBed } from '@angular/core/testing';
import { Exception } from './exception';

describe('Exception', () => {
  let service: Exception;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Exception);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
