import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
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
