import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Polymorphism4OverviewComponent } from './polymorphism4-overview.component';

describe('Polymorphism4OverviewComponent', () => {
  let component: Polymorphism4OverviewComponent;
  let fixture: ComponentFixture<Polymorphism4OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Polymorphism4OverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Polymorphism4OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
