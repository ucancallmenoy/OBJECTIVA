import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Introduction5ContentComponent } from './introduction5-content.component';

describe('Introduction5ContentComponent', () => {
  let component: Introduction5ContentComponent;
  let fixture: ComponentFixture<Introduction5ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Introduction5ContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Introduction5ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
