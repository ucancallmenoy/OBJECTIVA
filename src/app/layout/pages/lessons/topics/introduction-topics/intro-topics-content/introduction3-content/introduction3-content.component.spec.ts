import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Introduction3ContentComponent } from './introduction3-content.component';

describe('Introduction3ContentComponent', () => {
  let component: Introduction3ContentComponent;
  let fixture: ComponentFixture<Introduction3ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Introduction3ContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Introduction3ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
