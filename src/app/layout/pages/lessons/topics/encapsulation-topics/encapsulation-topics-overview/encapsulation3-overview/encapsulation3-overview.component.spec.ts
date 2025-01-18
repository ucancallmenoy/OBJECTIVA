import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Encapsulation3OverviewComponent } from './encapsulation3-overview.component';

describe('Encapsulation3OverviewComponent', () => {
  let component: Encapsulation3OverviewComponent;
  let fixture: ComponentFixture<Encapsulation3OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Encapsulation3OverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Encapsulation3OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
