import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inheritance4OverviewComponent } from './inheritance4-overview.component';

describe('Inheritance4OverviewComponent', () => {
  let component: Inheritance4OverviewComponent;
  let fixture: ComponentFixture<Inheritance4OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Inheritance4OverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inheritance4OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
