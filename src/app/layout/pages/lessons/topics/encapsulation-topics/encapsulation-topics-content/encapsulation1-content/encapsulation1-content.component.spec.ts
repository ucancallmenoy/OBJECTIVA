import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Encapsulation1ContentComponent } from './encapsulation1-content.component';

describe('Encapsulation1ContentComponent', () => {
  let component: Encapsulation1ContentComponent;
  let fixture: ComponentFixture<Encapsulation1ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Encapsulation1ContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Encapsulation1ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
