import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  constructor(private userService: UserService, private router: Router) { }

  get isLogged(): boolean {
    return this.userService.isLogged;
  };

  get getUsername(): string | undefined {
    return this.userService.user?.username;
  }

  logout(): void {
    this.userService.logoutUser().subscribe(() => {
      this.router.navigate(['/home']);
    })
  }

}
