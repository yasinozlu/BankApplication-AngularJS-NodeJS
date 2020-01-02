import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HavaleComponent } from './havale.component';

describe('HavaleComponent', () => {
  let component: HavaleComponent;
  let fixture: ComponentFixture<HavaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HavaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HavaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
