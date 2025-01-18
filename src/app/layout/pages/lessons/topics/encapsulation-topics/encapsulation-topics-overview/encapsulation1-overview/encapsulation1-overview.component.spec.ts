import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Encapsulation1OverviewComponent } from './encapsulation1-overview.component';

describe('Encapsulation1OverviewComponent', () => {
  let component: Encapsulation1OverviewComponent;
  let fixture: ComponentFixture<Encapsulation1OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Encapsulation1OverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Encapsulation1OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
