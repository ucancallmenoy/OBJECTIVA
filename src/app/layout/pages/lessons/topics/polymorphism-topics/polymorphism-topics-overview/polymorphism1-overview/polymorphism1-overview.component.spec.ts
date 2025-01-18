import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Polymorphism1OverviewComponent } from './polymorphism1-overview.component';

describe('Polymorphism1OverviewComponent', () => {
  let component: Polymorphism1OverviewComponent;
  let fixture: ComponentFixture<Polymorphism1OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Polymorphism1OverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Polymorphism1OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
