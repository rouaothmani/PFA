import { ComponentFixture, TestBed } from '@angular/core/testing';

import { For3Component } from './for3.component';

describe('For3Component', () => {
  let component: For3Component;
  let fixture: ComponentFixture<For3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [For3Component]
    });
    fixture = TestBed.createComponent(For3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
