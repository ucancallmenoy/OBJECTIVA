import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Polymorphism3OverviewComponent } from './polymorphism3-overview.component';

describe('Polymorphism3OverviewComponent', () => {
  let component: Polymorphism3OverviewComponent;
  let fixture: ComponentFixture<Polymorphism3OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Polymorphism3OverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Polymorphism3OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
