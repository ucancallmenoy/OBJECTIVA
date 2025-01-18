import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Introduction3OverviewComponent } from './introduction3-overview.component';

describe('Introduction3OverviewComponent', () => {
  let component: Introduction3OverviewComponent;
  let fixture: ComponentFixture<Introduction3OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Introduction3OverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Introduction3OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
