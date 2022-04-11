import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  //form: NgForm | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  login(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    const { email, password } = form.value;
    console.log(email);
    console.log(password);


  }
}
