import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Introduction8OverviewComponent } from './introduction8-overview.component';

describe('Introduction8OverviewComponent', () => {
  let component: Introduction8OverviewComponent;
  let fixture: ComponentFixture<Introduction8OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Introduction8OverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Introduction8OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
