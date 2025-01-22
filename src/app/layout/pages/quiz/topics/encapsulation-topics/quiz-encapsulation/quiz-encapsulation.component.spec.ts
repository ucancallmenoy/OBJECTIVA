import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizEncapsulationComponent } from './quiz-encapsulation.component';

describe('QuizEncapsulationComponent', () => {
  let component: QuizEncapsulationComponent;
  let fixture: ComponentFixture<QuizEncapsulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizEncapsulationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizEncapsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
