/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InputCamisetasComponent } from './input-camisetas.component';

describe('InputCamisetasComponent', () => {
  let component: InputCamisetasComponent;
  let fixture: ComponentFixture<InputCamisetasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputCamisetasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCamisetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
