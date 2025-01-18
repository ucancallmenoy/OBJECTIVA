import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Introduction4OverviewComponent } from './introduction4-overview.component';

describe('Introduction4OverviewComponent', () => {
  let component: Introduction4OverviewComponent;
  let fixture: ComponentFixture<Introduction4OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Introduction4OverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Introduction4OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
