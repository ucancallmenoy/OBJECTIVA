import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inheritance1OverviewComponent } from './inheritance1-overview.component';

describe('Inheritance1OverviewComponent', () => {
  let component: Inheritance1OverviewComponent;
  let fixture: ComponentFixture<Inheritance1OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Inheritance1OverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inheritance1OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
