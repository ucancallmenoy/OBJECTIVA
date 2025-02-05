import { TestBed } from '@angular/core/testing';

import { InheritanceQuizService } from './inheritance-quiz.service';

describe('InheritanceQuizService', () => {
  let service: InheritanceQuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InheritanceQuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
