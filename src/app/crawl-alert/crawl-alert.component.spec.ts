import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrawlAlertComponent } from './crawl-alert.component';

describe('CrawlAlertComponent', () => {
  let component: CrawlAlertComponent;
  let fixture: ComponentFixture<CrawlAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrawlAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawlAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
