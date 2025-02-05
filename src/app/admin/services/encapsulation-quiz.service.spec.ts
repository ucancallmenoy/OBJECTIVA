import { TestBed } from '@angular/core/testing';

import { EncapsulationQuizService } from './encapsulation-quiz.service';

describe('EncapsulationQuizService', () => {
  let service: EncapsulationQuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncapsulationQuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
