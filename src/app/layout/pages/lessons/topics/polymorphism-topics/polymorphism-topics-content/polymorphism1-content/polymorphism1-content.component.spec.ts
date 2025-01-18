import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Polymorphism1ContentComponent } from './polymorphism1-content.component';

describe('Polymorphism1ContentComponent', () => {
  let component: Polymorphism1ContentComponent;
  let fixture: ComponentFixture<Polymorphism1ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Polymorphism1ContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Polymorphism1ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
