import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Introduction1ContentComponent } from './introduction1-content.component';

describe('Introduction1ContentComponent', () => {
  let component: Introduction1ContentComponent;
  let fixture: ComponentFixture<Introduction1ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Introduction1ContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Introduction1ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
