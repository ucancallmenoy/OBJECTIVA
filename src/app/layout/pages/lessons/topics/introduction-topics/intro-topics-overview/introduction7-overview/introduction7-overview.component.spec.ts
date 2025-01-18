import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Introduction7OverviewComponent } from './introduction7-overview.component';

describe('Introduction7OverviewComponent', () => {
  let component: Introduction7OverviewComponent;
  let fixture: ComponentFixture<Introduction7OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Introduction7OverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Introduction7OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
