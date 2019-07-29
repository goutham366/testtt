import { FormGroup } from '@angular/forms';

// custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string) {
    console.log("entered to check")
    
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}



// export class PasswordValidation {

//     public  static PasswordMatch(control: AbstractControl) {
//        let password = control.get('newpassword'); // to get value in input tag
//        if(password){
//            let confirmPassword = control.get('confirmpassword').value; // to get value in input tag
//            if (password.value !== confirmPassword) {
//                control.get('confirmpassword').setErrors({ ['passwordmatch'] : true});
//            }else {
//                return null;
//            }
//        }
//    }

//    public static PasswordRule(control: AbstractControl) {
//        let password = control.get('newpassword').value; // to get value in input tag
//        let pattern = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,64}');               
//        if (!pattern.test(password)) {
//            control.get('newpassword').setErrors({ ['passwordrule'] : true});
//        }else if (password.toLowerCase() === 'something') {
//            control.get('newpassword').setErrors({ ['passwordrule'] : true});
//        }else {
//            return null;
//        }
//    }
// }
