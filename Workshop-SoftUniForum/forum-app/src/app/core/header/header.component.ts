import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService) { }

  get isLogged(): boolean {
    return this.userService.isLogged
  };

  get getUsername(): string | undefined{
    return this.userService.user?.username
  }

  ngOnInit(): void {
  }

}
