import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVariablesService } from 'src/app/core/services/global-variables.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
      private global : GlobalVariablesService,
      private router : Router
      ) { }

  ngOnInit(): void {
  }

  ThemeToggled(){
      this.global.ChangeTheme();
  }
  onHomeButtonClicked(){
      this.router.navigate(['/home']);
  }
  onListsButtonClicked(){
    this.router.navigate(['/lists']);

  }
  onItemsButtonClicked(){
    this.router.navigate(['/items']);

  }
}
