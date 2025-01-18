import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Abstraction4ContentComponent } from './abstraction4-content.component';

describe('Abstraction4ContentComponent', () => {
  let component: Abstraction4ContentComponent;
  let fixture: ComponentFixture<Abstraction4ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Abstraction4ContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Abstraction4ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
