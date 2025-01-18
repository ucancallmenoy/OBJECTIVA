import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Encapsulation4OverviewComponent } from './encapsulation4-overview.component';

describe('Encapsulation4OverviewComponent', () => {
  let component: Encapsulation4OverviewComponent;
  let fixture: ComponentFixture<Encapsulation4OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Encapsulation4OverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Encapsulation4OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
