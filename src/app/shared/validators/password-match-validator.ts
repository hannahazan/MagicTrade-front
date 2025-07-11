import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function passwordMatchValidator(): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
        const password = formGroup.get('password')?.value;
        const passwordConfirm = formGroup.get('passwordConfirm')?.value;
        return password === passwordConfirm ? null : {passwordMismatch: true};
    }
}