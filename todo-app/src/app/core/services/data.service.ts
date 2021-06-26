import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { listDTO } from 'src/app/models/DTOs/listDTO.model';
import { listItemDTO } from 'src/app/models/DTOs/listItemDTO.model';
import { environment } from 'src/environments/environment';
import { CoreModule } from '../core.module';

@Injectable({
    providedIn: CoreModule
})
export class DataService {
    private _baseUrl : string = environment.apiBaseUrl;
    private _listControllerPrefix : string = environment.listControllerPrefix;
    private _listItemsControllerPrefix : string = environment.listItemControllerPrefix;

    constructor(
        private http : HttpClient,
        private router : Router) { }
    
    GetAllLists() : Promise<listDTO[]>{

        const requestUrl = this._baseUrl + this._listControllerPrefix;
        return this.http.get<listDTO[]>(requestUrl).toPromise();
    }

    GetList(listId : string) : Promise<listDTO>{

        const requestUrl = this._baseUrl + this._listControllerPrefix + listId;
        return this.http.get<listDTO>(requestUrl).toPromise();
    }

    CreateList(newListDTO : listDTO) : Promise<listDTO>{
        console.log(newListDTO);
        
        const headers = {
            'Content-Type': 'application/json',
        }
        const requestUrl = this._baseUrl + this._listControllerPrefix;
        return this.http.post<listDTO>(requestUrl, newListDTO,{headers}).toPromise();
    }

    EditList(editedListDTO : listDTO) : Promise<listDTO>{

        const headers = {
            'Content-Type': 'application/json',
        }
        const requestUrl = this._baseUrl + this._listControllerPrefix + editedListDTO.id;
        return this.http.put<listDTO>(requestUrl, editedListDTO, {headers}).toPromise();
    }

    Delete(listId : string) : Promise<void>{

        const requestUrl = this._baseUrl + this._listControllerPrefix + listId;
        return this.http.delete<void>(requestUrl).toPromise();
    }

    
    GetAllUncompletedItems() : Promise<listItemDTO[]>{

        const requestUrl = this._baseUrl + this._listItemsControllerPrefix + "uncompleted";
        return this.http.get<listItemDTO[]>(requestUrl).toPromise();
    }

    GetListItems(listId : string) : Observable<listItemDTO[]>{

        const requestUrl = this._baseUrl + this._listControllerPrefix + listId + "/items";
        return this.http.get<listItemDTO[]>(requestUrl);
    }

    AddItemToList(caption : string , listId : string) : Promise<listItemDTO>{
        
        const headers = {
            'Content-Type': 'application/json',
        }
        const requestUrl = this._baseUrl + this._listControllerPrefix + listId + "/item";
        return this.http.post<listItemDTO>(requestUrl, {caption : caption} , {headers}).toPromise();
    }

    MarkItemAsCompleted(listItemID : string) : Promise<listItemDTO>{
        const requestUrl = this._baseUrl + this._listItemsControllerPrefix + listItemID;
        return this.http.patch<listItemDTO>(requestUrl,{}).toPromise();
    }

    GetAllListsCount() : Promise<number>{
        const requestUrl = this._baseUrl + this._listControllerPrefix + "count";
        return this.http.get<number>(requestUrl).toPromise();
    }

    GetAllListItemsCount() : Promise<number>{
        const requestUrl = this._baseUrl + this._listItemsControllerPrefix + "count";
        return this.http.get<number>(requestUrl).toPromise();
    }

    GetAllUncompletedItemsCount() : Promise<number>{
        const requestUrl = this._baseUrl + this._listItemsControllerPrefix + "uncompleted/count"
        return this.http.get<number>(requestUrl).toPromise();
    }
}
