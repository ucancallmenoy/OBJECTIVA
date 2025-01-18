import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Encapsulation5ContentComponent } from './encapsulation5-content.component';

describe('Encapsulation5ContentComponent', () => {
  let component: Encapsulation5ContentComponent;
  let fixture: ComponentFixture<Encapsulation5ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Encapsulation5ContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Encapsulation5ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
