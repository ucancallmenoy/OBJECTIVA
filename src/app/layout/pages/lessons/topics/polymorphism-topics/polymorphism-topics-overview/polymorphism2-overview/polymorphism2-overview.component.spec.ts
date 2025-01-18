import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Polymorphism2OverviewComponent } from './polymorphism2-overview.component';

describe('Polymorphism2OverviewComponent', () => {
  let component: Polymorphism2OverviewComponent;
  let fixture: ComponentFixture<Polymorphism2OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Polymorphism2OverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Polymorphism2OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
