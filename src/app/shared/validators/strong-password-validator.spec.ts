import {FormControl} from "@angular/forms";
import {strongPasswordValidator} from "./strong-password-validator";

describe('strongPasswordValidator', () => {
  it('should return null for a strong password', () => {
    const control = new FormControl(
      'Strong@Password123',
      strongPasswordValidator()
    );

    expect(control.errors).toBeNull();
  });


  it('should return error when password is invalid', () => {
    const control = new FormControl('weak-password', strongPasswordValidator());

    expect(control.errors).toBeTruthy();
    expect(control.errors?.['strongPassword']).toBeTruthy();
  });
})
