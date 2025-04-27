import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpilcComponent } from './mpilc.component';

describe('MpilcComponent', () => {
  let component: MpilcComponent;
  let fixture: ComponentFixture<MpilcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MpilcComponent]
    });
    fixture = TestBed.createComponent(MpilcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
