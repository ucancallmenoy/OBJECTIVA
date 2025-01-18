import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Abstraction1OverviewComponent } from './abstraction1-overview.component';

describe('Abstraction1OverviewComponent', () => {
  let component: Abstraction1OverviewComponent;
  let fixture: ComponentFixture<Abstraction1OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Abstraction1OverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Abstraction1OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
