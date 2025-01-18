import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Introduction2ContentComponent } from './introduction2-content.component';

describe('Introduction2ContentComponent', () => {
  let component: Introduction2ContentComponent;
  let fixture: ComponentFixture<Introduction2ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Introduction2ContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Introduction2ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
