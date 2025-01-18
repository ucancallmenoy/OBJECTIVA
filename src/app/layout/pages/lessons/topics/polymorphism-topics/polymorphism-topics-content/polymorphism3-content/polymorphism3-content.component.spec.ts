import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Polymorphism3ContentComponent } from './polymorphism3-content.component';

describe('Polymorphism3ContentComponent', () => {
  let component: Polymorphism3ContentComponent;
  let fixture: ComponentFixture<Polymorphism3ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Polymorphism3ContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Polymorphism3ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
