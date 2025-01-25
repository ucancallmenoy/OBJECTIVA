import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseInheritanceComponent } from './exercise-inheritance.component';

describe('ExerciseInheritanceComponent', () => {
  let component: ExerciseInheritanceComponent;
  let fixture: ComponentFixture<ExerciseInheritanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExerciseInheritanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseInheritanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
