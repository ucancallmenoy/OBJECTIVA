import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizIntroductionOopComponent } from './quiz-introduction-oop.component';

describe('QuizIntroductionOopComponent', () => {
  let component: QuizIntroductionOopComponent;
  let fixture: ComponentFixture<QuizIntroductionOopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizIntroductionOopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizIntroductionOopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
