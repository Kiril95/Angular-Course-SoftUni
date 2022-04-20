import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { emailValidator, phoneValidator, passwordMatchCheck } from '../validators';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent {
  passwordControl = new FormControl(null, { validators: [Validators.required, Validators.minLength(5)], updateOn: 'blur' });

  registerForm: FormGroup = this.formBuilder.group({
    'username': new FormControl(null, { validators: [Validators.required, Validators.minLength(5)], updateOn: 'blur' }),
    'email': new FormControl(null, { validators: [Validators.required, emailValidator], updateOn: 'blur' }),
    'phone': new FormControl(null, { validators: [Validators.required, phoneValidator], updateOn: 'blur' }),
    'phoneRegion': new FormControl(null, [Validators.required]),
    passGroup: new FormGroup({
      'password': this.passwordControl,
      'rePassword': new FormControl(null, [Validators.required, passwordMatchCheck(this.passwordControl)]),
    })
  });

  get passwordGroup() {
    return this.registerForm.controls['passGroup'] as FormGroup;
  }

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService) { }

  register(): void {
    if (this.registerForm.invalid) {
      return;
    }
    
    const body = {
      username: this.registerForm.controls['username'].value,
      email: this.registerForm.controls['email'].value,
      password: this.passwordGroup.controls['password'].value,
      rePassword: this.passwordGroup.controls['rePassword'].value,
      phoneRegion: this.registerForm.controls['phoneRegion'].value,
      tel: this.registerForm.controls['phone'].value
    }

    this.userService.registerUser(body).subscribe({
      next: () => {
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}