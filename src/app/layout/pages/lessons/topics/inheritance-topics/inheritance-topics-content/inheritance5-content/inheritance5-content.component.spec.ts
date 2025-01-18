import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inheritance5ContentComponent } from './inheritance5-content.component';

describe('Inheritance5ContentComponent', () => {
  let component: Inheritance5ContentComponent;
  let fixture: ComponentFixture<Inheritance5ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Inheritance5ContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inheritance5ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
