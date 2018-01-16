import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestAlertsComponent } from './latest-alerts.component';

describe('LatestAlertsComponent', () => {
  let component: LatestAlertsComponent;
  let fixture: ComponentFixture<LatestAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
