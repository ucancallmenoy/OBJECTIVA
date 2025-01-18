import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Encapsulation6ContentComponent } from './encapsulation6-content.component';

describe('Encapsulation6ContentComponent', () => {
  let component: Encapsulation6ContentComponent;
  let fixture: ComponentFixture<Encapsulation6ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Encapsulation6ContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Encapsulation6ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
