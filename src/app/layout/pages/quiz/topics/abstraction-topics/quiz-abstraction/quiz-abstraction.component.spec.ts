import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizAbstractionComponent } from './quiz-abstraction.component';

describe('QuizAbstractionComponent', () => {
  let component: QuizAbstractionComponent;
  let fixture: ComponentFixture<QuizAbstractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizAbstractionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizAbstractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
