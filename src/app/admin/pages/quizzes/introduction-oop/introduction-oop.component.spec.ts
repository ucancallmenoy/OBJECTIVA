import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionOopComponent } from './introduction-oop.component';

describe('IntroductionOopComponent', () => {
  let component: IntroductionOopComponent;
  let fixture: ComponentFixture<IntroductionOopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntroductionOopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroductionOopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
