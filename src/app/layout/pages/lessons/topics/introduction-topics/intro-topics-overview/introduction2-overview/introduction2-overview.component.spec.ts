import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Introduction2OverviewComponent } from './introduction2-overview.component';

describe('Introduction2OverviewComponent', () => {
  let component: Introduction2OverviewComponent;
  let fixture: ComponentFixture<Introduction2OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Introduction2OverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Introduction2OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
