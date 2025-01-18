import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inheritance6ContentComponent } from './inheritance6-content.component';

describe('Inheritance6ContentComponent', () => {
  let component: Inheritance6ContentComponent;
  let fixture: ComponentFixture<Inheritance6ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Inheritance6ContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inheritance6ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
