import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpiiComponent } from './mpii.component';

describe('MpiiComponent', () => {
  let component: MpiiComponent;
  let fixture: ComponentFixture<MpiiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MpiiComponent]
    });
    fixture = TestBed.createComponent(MpiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
