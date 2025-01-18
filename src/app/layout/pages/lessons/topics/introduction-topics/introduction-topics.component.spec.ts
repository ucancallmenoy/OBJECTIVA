import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionTopicsComponent } from './introduction-topics.component';

describe('IntroductionTopicsComponent', () => {
  let component: IntroductionTopicsComponent;
  let fixture: ComponentFixture<IntroductionTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntroductionTopicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroductionTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
