import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-view-widget',
  templateUrl: './list-view-widget.component.html',
  styleUrls: ['./list-view-widget.component.css']
})
export class ListViewWidgetComponent implements OnInit {
    public deletePressed: boolean = false;
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  DeletePressed(){
      this.deletePressed = true;
  }
  CancelPressed(){
      this.deletePressed = false;
  }
  NewListPressed(){
      this.router.navigate(['lists/-1/edit'])
  }
}
