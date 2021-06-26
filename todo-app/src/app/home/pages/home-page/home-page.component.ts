import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVariablesService } from 'src/app/core/services/global-variables.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(
      private router : Router,
      private global : GlobalVariablesService) { }

  ngOnInit(): void {
      this.global.ChangeHeader("")
  }

  onCreateClicked(){
      this.router.navigate(['/lists/-1/edit'])
  }

  onViewListsClicked(){
      this.router.navigate(['/lists'])
  }
  onViewItemsClicked(){
      this.router.navigate(['/items'])
  }
}
