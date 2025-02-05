import { TestBed } from '@angular/core/testing';

import { IntroductionOopQuizService } from './introduction-oop-quiz.service';

describe('IntroductionOopQuizService', () => {
  let service: IntroductionOopQuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntroductionOopQuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
