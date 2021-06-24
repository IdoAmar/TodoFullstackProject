import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalVariablesService } from './core/services/global-variables.service';
import { Theme } from './models/types/theme-type.model';
import { slideInAnimation } from './shared/animations/routing.animation';

@Component({
    animations:[slideInAnimation],
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{
    title = 'todo-app';
    _theme$! : Observable<Theme>;
    constructor(private global : GlobalVariablesService){}

    ngOnInit(): void {
        this._theme$ = this.global.currentTheme$;
    }

    prepareRoute(outlet: RouterOutlet) {
        
        return outlet && outlet.activatedRouteData
            && outlet.activatedRouteData.animation;
    }
    
}
