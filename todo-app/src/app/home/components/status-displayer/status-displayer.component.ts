import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
    selector: 'app-status-displayer',
    templateUrl: './status-displayer.component.html',
    styleUrls: ['./status-displayer.component.css']
})
export class StatusDisplayerComponent implements OnInit {

    listsCount! : Promise<number>;
    listItemsCount! : Promise<number>;
    uncompletedItemsCount! : Promise<number>;

    constructor(public data: DataService) { }

    ngOnInit(): void {
        this.listsCount = this.data.GetAllListsCount();
        this.listItemsCount = this.data.GetAllListItemsCount();
        this.uncompletedItemsCount = this.data.GetAllUncompletedItemsCount();
    }

}
