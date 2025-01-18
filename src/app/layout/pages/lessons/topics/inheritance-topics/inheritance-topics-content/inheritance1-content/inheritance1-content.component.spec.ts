import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inheritance1ContentComponent } from './inheritance1-content.component';

describe('Inheritance1ContentComponent', () => {
  let component: Inheritance1ContentComponent;
  let fixture: ComponentFixture<Inheritance1ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Inheritance1ContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inheritance1ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
