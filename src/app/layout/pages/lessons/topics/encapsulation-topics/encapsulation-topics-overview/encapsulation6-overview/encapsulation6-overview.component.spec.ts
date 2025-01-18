import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Encapsulation6OverviewComponent } from './encapsulation6-overview.component';

describe('Encapsulation6OverviewComponent', () => {
  let component: Encapsulation6OverviewComponent;
  let fixture: ComponentFixture<Encapsulation6OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Encapsulation6OverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Encapsulation6OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
