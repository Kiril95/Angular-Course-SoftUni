import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { emailValidator } from '../validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  loginForm: FormGroup = this.formBuilder.group({
    'email': new FormControl('', [Validators.required, emailValidator]),
    'password': new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  login(): void {
    const body = {
      email: this.loginForm.controls['email'].value,
      password: this.loginForm.controls['password'].value,
    }

    console.log(body);
    

  }
}
