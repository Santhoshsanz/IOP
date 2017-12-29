import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyAlertComponent } from './fly-alert.component';

describe('FlyAlertComponent', () => {
  let component: FlyAlertComponent;
  let fixture: ComponentFixture<FlyAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlyAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
