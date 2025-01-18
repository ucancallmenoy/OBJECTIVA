import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Introduction5OverviewComponent } from './introduction5-overview.component';

describe('Introduction5OverviewComponent', () => {
  let component: Introduction5OverviewComponent;
  let fixture: ComponentFixture<Introduction5OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Introduction5OverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Introduction5OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
