import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFieldAgentComponent } from './single-field-agent.component';

describe('SingleFieldAgentComponent', () => {
  let component: SingleFieldAgentComponent;
  let fixture: ComponentFixture<SingleFieldAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleFieldAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleFieldAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
