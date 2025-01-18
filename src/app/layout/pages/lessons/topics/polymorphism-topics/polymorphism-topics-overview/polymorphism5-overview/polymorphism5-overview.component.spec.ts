import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Polymorphism5OverviewComponent } from './polymorphism5-overview.component';

describe('Polymorphism5OverviewComponent', () => {
  let component: Polymorphism5OverviewComponent;
  let fixture: ComponentFixture<Polymorphism5OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Polymorphism5OverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Polymorphism5OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
