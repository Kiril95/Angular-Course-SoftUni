import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { emailValidator, phoneValidator, passwordMatchCheck } from '../validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent {
  passwordControl = new FormControl(null, [Validators.required, Validators.minLength(4)]);

  registerForm: FormGroup = this.formBuilder.group({
    'username': new FormControl(null, [Validators.required, Validators.minLength(5)]),
    'email': new FormControl(null, [Validators.required, emailValidator]),
    'phone': new FormControl(null, [Validators.required, phoneValidator]),
    'phoneRegion' : new FormControl(null, [Validators.required]),
    passGroup: new FormGroup({
      'password': this.passwordControl,
      'rePassword': new FormControl(null, [Validators.required, passwordMatchCheck(this.passwordControl)]),
    })
  });

  get passwordGroup(){
    return this.registerForm.controls['passGroup'] as FormGroup;
  }

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  register(): void{
    const body = {
      username: this.registerForm.controls['username'].value,
      email: this.registerForm.controls['email'].value,
      phone: this.registerForm.controls['phoneRegion'].value + this.registerForm.controls['phone'].value,
      password: this.passwordGroup.controls['password'].value
    }

    console.log(body);
    
  }

}
