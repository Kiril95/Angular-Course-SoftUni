import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) {
    this.userService.getUserProfile()?.subscribe(); // When the page is refreshed, we don't lose our login
  }
  
  ngOnInit() {
    //this.router.navigate(['/home']); // Redirect on page refresh
  }

}