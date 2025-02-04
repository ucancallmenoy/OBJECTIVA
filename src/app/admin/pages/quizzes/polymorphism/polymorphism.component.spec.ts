import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolymorphismComponent } from './polymorphism.component';

describe('PolymorphismComponent', () => {
  let component: PolymorphismComponent;
  let fixture: ComponentFixture<PolymorphismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PolymorphismComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolymorphismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
