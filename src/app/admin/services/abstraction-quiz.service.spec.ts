import { TestBed } from '@angular/core/testing';

import { AbstractionQuizService } from './abstraction-quiz.service';

describe('AbstractionQuizService', () => {
  let service: AbstractionQuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbstractionQuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
