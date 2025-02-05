import { TestBed } from '@angular/core/testing';

import { PolymorphismQuizService } from './polymorphism-quiz.service';

describe('PolymorphismQuizService', () => {
  let service: PolymorphismQuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolymorphismQuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
