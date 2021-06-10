import { Component, OnInit } from '@angular/core';
import { DocumentEventsService } from 'src/app/core/services/document-events.service';

@Component({
    selector: 'app-nav-button',
    templateUrl: './nav-button.component.html',
    styleUrls: ['./nav-button.component.css']
})
export class NavButtonComponent implements OnInit {

    constructor(private _docEvent: DocumentEventsService) { }

    ngOnInit(): void {

        
    }
}
