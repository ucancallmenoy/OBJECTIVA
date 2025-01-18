import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Abstraction1ContentComponent } from './abstraction1-content.component';

describe('Abstraction1ContentComponent', () => {
  let component: Abstraction1ContentComponent;
  let fixture: ComponentFixture<Abstraction1ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Abstraction1ContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Abstraction1ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
