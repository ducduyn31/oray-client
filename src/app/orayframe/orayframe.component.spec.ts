import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrayframeComponent } from './orayframe.component';

describe('OrayframeComponent', () => {
  let component: OrayframeComponent;
  let fixture: ComponentFixture<OrayframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrayframeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrayframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
