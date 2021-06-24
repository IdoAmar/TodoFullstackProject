import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { emptyListDTO, listDTO } from 'src/app/models/DTOs/listDTO.model';
import { CoreModule } from '../core.module';

@Injectable({
    providedIn: CoreModule
})
export class ListCacheService {
    private _cachedList : listDTO = emptyListDTO();
    
    constructor() { }

    GetCachedList() : listDTO{
        return this._cachedList;
    }

    CacheList(listToCache : listDTO){
        this._cachedList = listToCache;
    }

}
