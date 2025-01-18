import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inheritance3OverviewComponent } from './inheritance3-overview.component';

describe('Inheritance3OverviewComponent', () => {
  let component: Inheritance3OverviewComponent;
  let fixture: ComponentFixture<Inheritance3OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Inheritance3OverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inheritance3OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
