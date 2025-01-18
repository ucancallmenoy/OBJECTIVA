import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inheritance3ContentComponent } from './inheritance3-content.component';

describe('Inheritance3ContentComponent', () => {
  let component: Inheritance3ContentComponent;
  let fixture: ComponentFixture<Inheritance3ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Inheritance3ContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inheritance3ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
