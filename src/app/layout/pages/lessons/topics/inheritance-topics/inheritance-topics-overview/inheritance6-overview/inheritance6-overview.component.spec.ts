import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inheritance6OverviewComponent } from './inheritance6-overview.component';

describe('Inheritance6OverviewComponent', () => {
  let component: Inheritance6OverviewComponent;
  let fixture: ComponentFixture<Inheritance6OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Inheritance6OverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inheritance6OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
