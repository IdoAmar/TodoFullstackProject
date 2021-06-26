import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { GlobalVariablesService } from 'src/app/core/services/global-variables.service';
import { listItemDTO } from 'src/app/models/DTOs/listItemDTO.model';

@Component({
    selector: 'app-items-page',
    templateUrl: './items-page.component.html',
    styleUrls: ['./items-page.component.css']
})
export class ItemsPageComponent implements OnInit {
    uncompletedItems$! : Promise<listItemDTO[]>;
    constructor(
        private data: DataService,
        private global : GlobalVariablesService) { }

    ngOnInit(): void {
        this.global.ChangeHeader("Active items")
        this.uncompletedItems$ = this.data.GetAllUncompletedItems();
    }

}
