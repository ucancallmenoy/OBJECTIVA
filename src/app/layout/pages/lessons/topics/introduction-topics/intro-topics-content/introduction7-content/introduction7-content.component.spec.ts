import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Introduction7ContentComponent } from './introduction7-content.component';

describe('Introduction7ContentComponent', () => {
  let component: Introduction7ContentComponent;
  let fixture: ComponentFixture<Introduction7ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Introduction7ContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Introduction7ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
