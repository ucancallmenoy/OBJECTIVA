import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Abstraction3ContentComponent } from './abstraction3-content.component';

describe('Abstraction3ContentComponent', () => {
  let component: Abstraction3ContentComponent;
  let fixture: ComponentFixture<Abstraction3ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Abstraction3ContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Abstraction3ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
