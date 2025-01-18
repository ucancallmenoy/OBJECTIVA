import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inheritance2ContentComponent } from './inheritance2-content.component';

describe('Inheritance2ContentComponent', () => {
  let component: Inheritance2ContentComponent;
  let fixture: ComponentFixture<Inheritance2ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Inheritance2ContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inheritance2ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
