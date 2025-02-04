import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionJavaComponent } from './introduction-java.component';

describe('IntroductionJavaComponent', () => {
  let component: IntroductionJavaComponent;
  let fixture: ComponentFixture<IntroductionJavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntroductionJavaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroductionJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
