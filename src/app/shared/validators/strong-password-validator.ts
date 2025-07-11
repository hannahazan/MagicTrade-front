import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function strongPasswordValidator(): ValidatorFn {
    const pattern = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*#?&]).{12,}$';
    const strongPasswordRegex = new RegExp(pattern);

    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value || '';

        if (!strongPasswordRegex.test(value)) {
            return {
                strongPassword: {
                    message: 'Password must be at least 12 characters long and include one uppercase letter, one lowercase letter, one number, and one special character (@$!%*#?&).'
                }
            }
        }

        return null;
    }
}