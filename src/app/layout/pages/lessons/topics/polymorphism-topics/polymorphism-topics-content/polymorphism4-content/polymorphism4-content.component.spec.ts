import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Polymorphism4ContentComponent } from './polymorphism4-content.component';

describe('Polymorphism4ContentComponent', () => {
  let component: Polymorphism4ContentComponent;
  let fixture: ComponentFixture<Polymorphism4ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Polymorphism4ContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Polymorphism4ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
