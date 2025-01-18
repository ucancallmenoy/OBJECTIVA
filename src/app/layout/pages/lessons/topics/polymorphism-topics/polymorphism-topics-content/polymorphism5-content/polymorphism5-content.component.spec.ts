import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Polymorphism5ContentComponent } from './polymorphism5-content.component';

describe('Polymorphism5ContentComponent', () => {
  let component: Polymorphism5ContentComponent;
  let fixture: ComponentFixture<Polymorphism5ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Polymorphism5ContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Polymorphism5ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
