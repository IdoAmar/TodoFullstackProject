import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { listItemDTO } from 'src/app/models/DTOs/listItemDTO.model';

@Component({
    selector: 'app-list-item-ticker',
    templateUrl: './list-item-ticker.component.html',
    styleUrls: ['./list-item-ticker.component.css']
})
export class ListItemTickerComponent implements OnInit {
    
    currentIcon : "check_box_outline_blank" | "check_box" = "check_box_outline_blank";
    isDisabled! : boolean;
    @Input() item! : listItemDTO;
    constructor(private data : DataService) { }

    ngOnInit(): void {
        this.isDisabled = this.item.isDone
        if(this.isDisabled){
            this.currentIcon ="check_box"
        }
    }

    itemChecked(){
        this.isDisabled = true;
        this.currentIcon = "check_box";
        this.data.MarkItemAsCompleted(this.item.id);

    }
}
