import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HesapOlusturComponent } from './hesap-olustur.component';

describe('HesapOlusturComponent', () => {
  let component: HesapOlusturComponent;
  let fixture: ComponentFixture<HesapOlusturComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HesapOlusturComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HesapOlusturComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
