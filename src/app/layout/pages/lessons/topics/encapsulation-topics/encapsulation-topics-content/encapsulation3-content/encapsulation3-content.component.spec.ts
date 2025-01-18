import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Encapsulation3ContentComponent } from './encapsulation3-content.component';

describe('Encapsulation3ContentComponent', () => {
  let component: Encapsulation3ContentComponent;
  let fixture: ComponentFixture<Encapsulation3ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Encapsulation3ContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Encapsulation3ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
