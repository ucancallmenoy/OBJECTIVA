import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Abstraction2OverviewComponent } from './abstraction2-overview.component';

describe('Abstraction2OverviewComponent', () => {
  let component: Abstraction2OverviewComponent;
  let fixture: ComponentFixture<Abstraction2OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Abstraction2OverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Abstraction2OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
