import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Abstraction2ContentComponent } from './abstraction2-content.component';

describe('Abstraction2ContentComponent', () => {
  let component: Abstraction2ContentComponent;
  let fixture: ComponentFixture<Abstraction2ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Abstraction2ContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Abstraction2ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
