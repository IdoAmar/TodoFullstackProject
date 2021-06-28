import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalVariablesService } from 'src/app/core/services/global-variables.service';
@Component({
    selector: 'app-header-presenter',
    templateUrl: './header-presenter.component.html',
    styleUrls: ['./header-presenter.component.css']
})
export class HeaderPresenterComponent implements OnInit {
    currentHeader$! : Observable<string>;
    
    constructor(
        private global : GlobalVariablesService
    ) { }

    ngOnInit(): void {
        this.currentHeader$ = this.global.currentHeader$;
    }

}
