import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingReprocessComponent } from './routing-reprocess.component';

describe('RoutingReprocessComponent', () => {
  let component: RoutingReprocessComponent;
  let fixture: ComponentFixture<RoutingReprocessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingReprocessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingReprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
