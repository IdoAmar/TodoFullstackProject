import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lists-page',
  templateUrl: './lists-page.component.html',
  styleUrls: ['./lists-page.component.css']
})
export class ListsPageComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  CardClicked(){
      this.router.navigate(['/lists/1'])
  }
}
