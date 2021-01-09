import { TestBed } from '@angular/core/testing';
import { from } from 'rxjs';

import { PropServService } from './prop-serv.service';


describe('PropServService', () => {
  let service: PropServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
