import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Introduction8ContentComponent } from './introduction8-content.component';

describe('Introduction8ContentComponent', () => {
  let component: Introduction8ContentComponent;
  let fixture: ComponentFixture<Introduction8ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Introduction8ContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Introduction8ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
