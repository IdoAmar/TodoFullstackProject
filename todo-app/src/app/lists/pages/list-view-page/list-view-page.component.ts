import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-view-page',
  templateUrl: './list-view-page.component.html',
  styleUrls: ['./list-view-page.component.css']
})
export class ListViewPageComponent implements OnInit {
    public itemsList : string[] = ['tomat','cucumba','s u c c', 'gamba', 'orang']
  constructor() { }

  ngOnInit(): void {
  }

  onItemAdded(itemText : string){
      this.itemsList.push(itemText);
  }
}
