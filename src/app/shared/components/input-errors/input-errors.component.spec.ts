import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputErrorsComponent } from './input-errors.component';
import {FormControl} from "@angular/forms";

describe('InputErrorsComponent', () => {
  let component: InputErrorsComponent;
  let fixture: ComponentFixture<InputErrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputErrorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputErrorsComponent);
    component = fixture.componentInstance;

    component.control = new FormControl();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
