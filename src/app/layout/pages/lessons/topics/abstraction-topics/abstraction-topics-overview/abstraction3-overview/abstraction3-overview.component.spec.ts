import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Abstraction3OverviewComponent } from './abstraction3-overview.component';

describe('Abstraction3OverviewComponent', () => {
  let component: Abstraction3OverviewComponent;
  let fixture: ComponentFixture<Abstraction3OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Abstraction3OverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Abstraction3OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
