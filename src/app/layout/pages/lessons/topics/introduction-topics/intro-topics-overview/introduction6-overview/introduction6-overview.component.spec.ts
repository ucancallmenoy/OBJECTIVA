import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Introduction6OverviewComponent } from './introduction6-overview.component';

describe('Introduction6OverviewComponent', () => {
  let component: Introduction6OverviewComponent;
  let fixture: ComponentFixture<Introduction6OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Introduction6OverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Introduction6OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
