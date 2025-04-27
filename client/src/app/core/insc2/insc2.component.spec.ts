import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Insc2Component } from './insc2.component';

describe('Insc2Component', () => {
  let component: Insc2Component;
  let fixture: ComponentFixture<Insc2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Insc2Component]
    });
    fixture = TestBed.createComponent(Insc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
