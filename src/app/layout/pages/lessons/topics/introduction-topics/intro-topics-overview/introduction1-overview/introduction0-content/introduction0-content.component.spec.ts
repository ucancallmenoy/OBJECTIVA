import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Introduction0ContentComponent } from './introduction0-content.component';

describe('Introduction0ContentComponent', () => {
  let component: Introduction0ContentComponent;
  let fixture: ComponentFixture<Introduction0ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Introduction0ContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Introduction0ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
