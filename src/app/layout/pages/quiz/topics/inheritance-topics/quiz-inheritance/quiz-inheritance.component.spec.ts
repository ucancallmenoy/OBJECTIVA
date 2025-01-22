import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizInheritanceComponent } from './quiz-inheritance.component';

describe('QuizInheritanceComponent', () => {
  let component: QuizInheritanceComponent;
  let fixture: ComponentFixture<QuizInheritanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizInheritanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizInheritanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
