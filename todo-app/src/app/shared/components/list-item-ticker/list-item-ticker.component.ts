import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-list-item-ticker',
    templateUrl: './list-item-ticker.component.html',
    styleUrls: ['./list-item-ticker.component.css']
})
export class ListItemTickerComponent implements OnInit {
    
    currentIcon : "check_box_outline_blank" | "check_box" = "check_box_outline_blank";
    isDisabled : boolean = false;
    constructor() { }

    ngOnInit(): void {
    }

    itemChecked(){
        this.isDisabled = true;
        this.currentIcon = "check_box";
    }
}
