import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ThemesService } from 'src/app/services/themes.service';

@Component({
  selector: 'app-create-theme',
  templateUrl: './create-theme.component.html',
  styleUrls: ['./create-theme.component.sass']
})
export class CreateThemeComponent {

  constructor(private themeService: ThemesService, private router: Router) { }
  
  submitTheme(addThemeForm: NgForm){
    if (addThemeForm.invalid) {
      return;
    }
    
    this.themeService.addTheme(addThemeForm.value).subscribe({
      next: (theme) => {
        this.router.navigate(['/themes']);
      },
      error: (err) => {
        console.log(err);
      } 
    });
  }

}
