import { FormGroup } from '@angular/forms';

// custom validator to check that two fields match
export function MustMatchAlphabets(controlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        var errors = {
            'mustMatchUppercaseAlphabets': false,
            'mustMatchLowercaseAlphabets': false,
            'mustMatchNumeric': false,
            'matchLength':false
        }
        let uppercasePattern = new RegExp('^(?=.*?[A-Z])');
        let lowercasePattern = new RegExp('^(?=.*?[a-z])');
        let numericPattern = new RegExp('^(?=.*?[0-9])');
        control.setErrors(errors);
      
        if(control.value.length<=8){
            errors.matchLength=true;
        }
        if (!uppercasePattern.test(control.value)) {
            errors.mustMatchUppercaseAlphabets = true;            
        }
        if (!lowercasePattern.test(control.value)) {
           errors.mustMatchLowercaseAlphabets = true;
        }
        if (!numericPattern.test(control.value)) {
            errors.mustMatchNumeric = true;
        }

        control.setErrors(errors);
    }
}