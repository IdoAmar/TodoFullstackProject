import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Theme } from 'src/app/models/types/theme-type.model';
import { CoreModule } from '../core.module';

@Injectable({
    providedIn: CoreModule
})
export class GlobalVariablesService {
    private _currentTheme : Theme = 'darkTheme';
    private _currentTheme$ : BehaviorSubject<Theme> = new BehaviorSubject<Theme>(this._currentTheme);
    private _currentHeader$ : BehaviorSubject<string> = new BehaviorSubject<string>("");
    constructor() { }

    get currentTheme$() : Observable<Theme>{
        
        return this._currentTheme$.asObservable();
    }

    ChangeTheme() : void {
        if(this._currentTheme === 'darkTheme'){
            this._currentTheme = 'lightTheme'
            this._currentTheme$.next(this._currentTheme);
            
        }
        else{
            this._currentTheme = 'darkTheme'
            this._currentTheme$.next(this._currentTheme);
        }
    }

    get currentHeader$() : Observable<string>{
        return this._currentHeader$.asObservable();
    }
    ChangeHeader(newHeader : string) : void {
        this._currentHeader$.next(newHeader);
    }
}
