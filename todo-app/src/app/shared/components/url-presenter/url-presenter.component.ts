import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators'
import { GlobalVariablesService } from 'src/app/core/services/global-variables.service';
@Component({
    selector: 'app-url-presenter',
    templateUrl: './url-presenter.component.html',
    styleUrls: ['./url-presenter.component.css']
})
export class UrlPresenterComponent implements OnInit {
    currentHeader$! : Observable<string>;
    
    constructor(
        private global : GlobalVariablesService
    ) { }

    ngOnInit(): void {
        this.currentHeader$ = this.global.currentHeader$;
    }

}
