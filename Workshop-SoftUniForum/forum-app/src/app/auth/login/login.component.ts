import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { emailValidator } from '../validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  loginForm: FormGroup = this.formBuilder.group({
    'email': new FormControl(null, { validators: [Validators.required, emailValidator], updateOn: 'blur' }),
    'password': new FormControl(null, { validators: [Validators.required, Validators.minLength(5)], updateOn: 'blur' })
  });

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private userService: UserService) { }

  login(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const body = {
      email: this.loginForm.controls['email'].value,
      password: this.loginForm.controls['password'].value,
    }

    this.userService.loginUser(body).subscribe({
      next: () => {
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
