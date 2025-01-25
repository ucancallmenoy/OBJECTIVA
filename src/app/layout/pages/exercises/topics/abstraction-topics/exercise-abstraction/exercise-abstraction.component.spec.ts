import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseAbstractionComponent } from './exercise-abstraction.component';

describe('ExerciseAbstractionComponent', () => {
  let component: ExerciseAbstractionComponent;
  let fixture: ComponentFixture<ExerciseAbstractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExerciseAbstractionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseAbstractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
