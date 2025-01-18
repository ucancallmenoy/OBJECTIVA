import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inheritance4ContentComponent } from './inheritance4-content.component';

describe('Inheritance4ContentComponent', () => {
  let component: Inheritance4ContentComponent;
  let fixture: ComponentFixture<Inheritance4ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Inheritance4ContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inheritance4ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
