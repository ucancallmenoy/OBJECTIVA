import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizPolymorphismComponent } from './quiz-polymorphism.component';

describe('QuizPolymorphismComponent', () => {
  let component: QuizPolymorphismComponent;
  let fixture: ComponentFixture<QuizPolymorphismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizPolymorphismComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizPolymorphismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
