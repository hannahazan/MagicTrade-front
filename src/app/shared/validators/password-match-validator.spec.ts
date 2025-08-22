import {FormControl, FormGroup} from "@angular/forms";
import {passwordMatchValidator} from "./password-match-validator";

describe('passwordMatchValidator', () => {
  it('should return null if passwords match', () => {
    const form = new FormGroup(
      {
        password: new FormControl('abc'),
        passwordConfirm: new FormControl('abc')
      },
      { validators: passwordMatchValidator() }
    );

    expect(form.errors).toBeNull();
  });

  it('should return error when passwords do not match', () => {
    const form = new FormGroup(
      {
        password: new FormControl('abc'),
        passwordConfirm: new FormControl('xyz')
      },
      { validators: passwordMatchValidator() }
    );
    expect(form.errors).toEqual({ passwordMismatch: true });
  })

});
