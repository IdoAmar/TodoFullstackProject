import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { listItemDTO } from 'src/app/models/DTOs/listItemDTO.model';

@Component({
    selector: 'app-items-page',
    templateUrl: './items-page.component.html',
    styleUrls: ['./items-page.component.css']
})
export class ItemsPageComponent implements OnInit {
    uncompletedItems$! : Promise<listItemDTO[]>;
    constructor(private data: DataService) { }

    ngOnInit(): void {
        this.uncompletedItems$ = this.data.GetAllUncompletedItems();
    }

}
