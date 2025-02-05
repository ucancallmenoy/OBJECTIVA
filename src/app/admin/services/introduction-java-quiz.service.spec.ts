import { TestBed } from '@angular/core/testing';

import { IntroductionJavaQuizService } from './introduction-java-quiz.service';

describe('IntroductionJavaQuizService', () => {
  let service: IntroductionJavaQuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntroductionJavaQuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
