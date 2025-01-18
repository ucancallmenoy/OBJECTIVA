import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Encapsulation2ContentComponent } from './encapsulation2-content.component';

describe('Encapsulation2ContentComponent', () => {
  let component: Encapsulation2ContentComponent;
  let fixture: ComponentFixture<Encapsulation2ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Encapsulation2ContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Encapsulation2ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
