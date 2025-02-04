import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractionComponent } from './abstraction.component';

describe('AbstractionComponent', () => {
  let component: AbstractionComponent;
  let fixture: ComponentFixture<AbstractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AbstractionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbstractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
