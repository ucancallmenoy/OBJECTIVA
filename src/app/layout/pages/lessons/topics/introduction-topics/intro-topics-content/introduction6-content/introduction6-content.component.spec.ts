import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Introduction6ContentComponent } from './introduction6-content.component';

describe('Introduction6ContentComponent', () => {
  let component: Introduction6ContentComponent;
  let fixture: ComponentFixture<Introduction6ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Introduction6ContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Introduction6ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
