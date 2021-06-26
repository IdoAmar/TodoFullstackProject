import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalVariablesService } from 'src/app/core/services/global-variables.service';

@Component({
    selector: 'app-list-edit-page',
    templateUrl: './list-edit-page.component.html',
    styleUrls: ['./list-edit-page.component.css']
})
export class ListEditPageComponent implements OnInit {

    constructor(
        private global: GlobalVariablesService,
        private route: ActivatedRoute) { }

    ngOnInit(): void {
        if (this.route.snapshot.params.id === "-1") {
            this.global.ChangeHeader("Create a list")
        }
        else {
            this.global.ChangeHeader("Edit list details");
        }
    }

}
