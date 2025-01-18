import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Abstraction4OverviewComponent } from './abstraction4-overview.component';

describe('Abstraction4OverviewComponent', () => {
  let component: Abstraction4OverviewComponent;
  let fixture: ComponentFixture<Abstraction4OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Abstraction4OverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Abstraction4OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
