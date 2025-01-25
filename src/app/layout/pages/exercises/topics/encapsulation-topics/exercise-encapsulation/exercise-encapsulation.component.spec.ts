import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseEncapsulationComponent } from './exercise-encapsulation.component';

describe('ExerciseEncapsulationComponent', () => {
  let component: ExerciseEncapsulationComponent;
  let fixture: ComponentFixture<ExerciseEncapsulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExerciseEncapsulationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseEncapsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
