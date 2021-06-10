import { Injectable } from '@angular/core';
import { fromEvent, Observable, Subject } from 'rxjs';
import { CoreModule } from '../core.module';

@Injectable({
    providedIn: CoreModule,
})
export class DocumentEventsService {

    // private _documentLeave$ : Observable<Event>= fromEvent(document,'mouseleave');
    private _documentMouseUp$ : Observable<Event> = fromEvent(document,'mouseup');

    constructor() { }

    // get documentLeave$(): Observable<Event>{
    //     return this._documentLeave$;
    // }

    get documentMouseUp$(): Observable<Event>{
        return this._documentMouseUp$;
    }
    

}
