import { ComponentFixture, TestBed } from '@angular/core/testing';

import { For2Component } from './for2.component';

describe('For2Component', () => {
  let component: For2Component;
  let fixture: ComponentFixture<For2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [For2Component]
    });
    fixture = TestBed.createComponent(For2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
