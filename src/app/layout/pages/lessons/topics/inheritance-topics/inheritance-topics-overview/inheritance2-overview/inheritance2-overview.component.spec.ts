import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inheritance2OverviewComponent } from './inheritance2-overview.component';

describe('Inheritance2OverviewComponent', () => {
  let component: Inheritance2OverviewComponent;
  let fixture: ComponentFixture<Inheritance2OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Inheritance2OverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inheritance2OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
