import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  phonePattern = "^[0-9]{9}$"; 

  constructor() { }

  ngOnInit(): void {
  }

  register(form: NgForm){
    if (form.invalid) {
      return;
    }


  }

}
