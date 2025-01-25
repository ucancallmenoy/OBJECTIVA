import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisePolymorphismComponent } from './exercise-polymorphism.component';

describe('ExercisePolymorphismComponent', () => {
  let component: ExercisePolymorphismComponent;
  let fixture: ComponentFixture<ExercisePolymorphismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExercisePolymorphismComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExercisePolymorphismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
