import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Polymorphism6OverviewComponent } from './polymorphism6-overview.component';

describe('Polymorphism6OverviewComponent', () => {
  let component: Polymorphism6OverviewComponent;
  let fixture: ComponentFixture<Polymorphism6OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Polymorphism6OverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Polymorphism6OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
