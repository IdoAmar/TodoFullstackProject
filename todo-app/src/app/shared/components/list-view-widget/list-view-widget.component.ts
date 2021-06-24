import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';
import { listDTO } from 'src/app/models/DTOs/listDTO.model';

@Component({
    selector: 'app-list-view-widget',
    templateUrl: './list-view-widget.component.html',
    styleUrls: ['./list-view-widget.component.css']
})
export class ListViewWidgetComponent implements OnInit {

    public deletePressed: boolean = false;
    @Input() list!: listDTO;
    constructor(
        private router: Router,
        private data : DataService) { }

    ngOnInit(): void {
    }
    DeletePressed() {
        this.deletePressed = true;
    }
    CancelPressed() {
        this.deletePressed = false;
    }
    NewListPressed() {
        this.router.navigate(['lists/-1/edit'])
    }
    EditListPressed() {
        this.router.navigate(['lists/' + this.list.id + '/edit'])
    }
    async DeleteConfirmedPressed(){
        await this.data.Delete(this.list.id);
        this.router.navigate(['lists']);
    }
}
