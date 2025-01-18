import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Encapsulation5OverviewComponent } from './encapsulation5-overview.component';

describe('Encapsulation5OverviewComponent', () => {
  let component: Encapsulation5OverviewComponent;
  let fixture: ComponentFixture<Encapsulation5OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Encapsulation5OverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Encapsulation5OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
