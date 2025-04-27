import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MreescComponent } from './mreesc.component';

describe('MreescComponent', () => {
  let component: MreescComponent;
  let fixture: ComponentFixture<MreescComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MreescComponent]
    });
    fixture = TestBed.createComponent(MreescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
