import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Polymorphism6ContentComponent } from './polymorphism6-content.component';

describe('Polymorphism6ContentComponent', () => {
  let component: Polymorphism6ContentComponent;
  let fixture: ComponentFixture<Polymorphism6ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Polymorphism6ContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Polymorphism6ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
