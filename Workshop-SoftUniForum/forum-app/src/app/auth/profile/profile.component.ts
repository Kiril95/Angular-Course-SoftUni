import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent {
  editMode: boolean = false;
  
  constructor(private userService: UserService) { }
  
  get user() {
    return this.userService.user;
  }

  editProfile(editForm: NgForm): void {
    if (editForm.invalid) {
      return;
    }

    this.userService.updateProfile(editForm.value).subscribe({
      next: () => {
        this.editMode = false;
      },
      error: (err) => {
        console.log(err);
      } 
    });
  }

}
