import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Encapsulation2OverviewComponent } from './encapsulation2-overview.component';

describe('Encapsulation2OverviewComponent', () => {
  let component: Encapsulation2OverviewComponent;
  let fixture: ComponentFixture<Encapsulation2OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Encapsulation2OverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Encapsulation2OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
