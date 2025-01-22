import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizIntroductionJavaComponent } from './quiz-introduction-java.component';

describe('QuizIntroductionJavaComponent', () => {
  let component: QuizIntroductionJavaComponent;
  let fixture: ComponentFixture<QuizIntroductionJavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizIntroductionJavaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizIntroductionJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
