import { ComponentFixture, TestBed } from '@angular/core/testing';

import { For4Component } from './for4.component';

describe('For4Component', () => {
  let component: For4Component;
  let fixture: ComponentFixture<For4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [For4Component]
    });
    fixture = TestBed.createComponent(For4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
