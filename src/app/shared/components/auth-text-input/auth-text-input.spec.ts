import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthTextInputComponent } from './auth-text-input.component';
import {FormControl} from "@angular/forms";

describe('AuthTextInputComponent', () => {
  let component: AuthTextInputComponent;
  let fixture: ComponentFixture<AuthTextInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthTextInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthTextInputComponent);
    component = fixture.componentInstance;

    component.control = new FormControl();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
