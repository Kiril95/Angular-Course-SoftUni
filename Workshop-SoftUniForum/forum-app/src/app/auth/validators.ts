import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    if(!control.value){
        return null;
    }

    if(!/\w{6,}@gmail\.(com|bg)/.test(control.value)){
        return {
            emailError: true
        }
    }
    return null;
}

export function phoneValidator(control: AbstractControl): ValidationErrors | null {    
    if(!control.value){
        return null;
    }

    if(!/^[0-9]{9}$/.test(control.value)){
        return {
            phoneError: true
        }
    }
    return null;
}

export function passwordMatchCheck(passwordControl: AbstractControl) {
    const isMatch: ValidatorFn = (rePasswordControl: AbstractControl) => {
        if (passwordControl.value !== rePasswordControl.value) {
            return {
                passwordsDiffer: true
            }
        }
        return null;
    }
    
    return isMatch;
}