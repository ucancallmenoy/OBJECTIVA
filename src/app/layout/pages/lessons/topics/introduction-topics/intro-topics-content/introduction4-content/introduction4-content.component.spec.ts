import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Introduction4ContentComponent } from './introduction4-content.component';

describe('Introduction4ContentComponent', () => {
  let component: Introduction4ContentComponent;
  let fixture: ComponentFixture<Introduction4ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Introduction4ContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Introduction4ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
