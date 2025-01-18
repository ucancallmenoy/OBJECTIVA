import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inheritance5OverviewComponent } from './inheritance5-overview.component';

describe('Inheritance5OverviewComponent', () => {
  let component: Inheritance5OverviewComponent;
  let fixture: ComponentFixture<Inheritance5OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Inheritance5OverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inheritance5OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
