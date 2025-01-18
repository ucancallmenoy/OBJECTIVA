import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Encapsulation4ContentComponent } from './encapsulation4-content.component';

describe('Encapsulation4ContentComponent', () => {
  let component: Encapsulation4ContentComponent;
  let fixture: ComponentFixture<Encapsulation4ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Encapsulation4ContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Encapsulation4ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
