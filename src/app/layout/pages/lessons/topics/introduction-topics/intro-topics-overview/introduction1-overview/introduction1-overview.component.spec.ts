import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Introduction1OverviewComponent } from './introduction1-overview.component';

describe('Introduction1OverviewComponent', () => {
  let component: Introduction1OverviewComponent;
  let fixture: ComponentFixture<Introduction1OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Introduction1OverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Introduction1OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
