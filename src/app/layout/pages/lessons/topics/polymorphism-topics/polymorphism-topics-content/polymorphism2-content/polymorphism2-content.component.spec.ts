import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Polymorphism2ContentComponent } from './polymorphism2-content.component';

describe('Polymorphism2ContentComponent', () => {
  let component: Polymorphism2ContentComponent;
  let fixture: ComponentFixture<Polymorphism2ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Polymorphism2ContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Polymorphism2ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
