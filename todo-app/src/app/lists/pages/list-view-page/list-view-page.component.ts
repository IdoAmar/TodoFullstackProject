import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';
import { ListCacheService } from 'src/app/core/services/list-cache.service';
import { listDTO } from 'src/app/models/DTOs/listDTO.model';
import { listItemDTO } from 'src/app/models/DTOs/listItemDTO.model';

@Component({
    selector: 'app-list-view-page',
    templateUrl: './list-view-page.component.html',
    styleUrls: ['./list-view-page.component.css'],
})
export class ListViewPageComponent implements OnInit, OnDestroy {
    itemsListCache$ : BehaviorSubject<listItemDTO[]> = new BehaviorSubject<listItemDTO[]>([]);
    itemsList$!: Observable<listItemDTO[]>;
    list$! : Promise<listDTO>;
    itemsList : listItemDTO[] = []; 
    private _listId! : string;
    private getListSubscription! : Subscription;

    constructor(
        private listCache : ListCacheService,
        private data : DataService,
        private route : ActivatedRoute) { }

    ngOnInit(): void{

        this._listId = this.route.snapshot.params.id;

        const cachedList = this.listCache.GetCachedList();

        if(cachedList.id == this._listId)
        {
            this.list$ = Promise.resolve(cachedList);
        }
        else{
            this.list$ = this.data.GetList(this._listId);
        }
        this.itemsList$ = this.itemsListCache$.asObservable();
        this.getListSubscription = this.data.GetListItems(this._listId)
                                    .subscribe(i => {
                                        this.itemsList = i;
                                        this.itemsListCache$.next(i)
                                    });

    }

    ngOnDestroy(): void {
        this.getListSubscription.unsubscribe();
    }

    async onItemAdded(itemText: string) {
        
        this.itemsList.push(await this.data.AddItemToList(itemText, this._listId));
        this.itemsListCache$.next(this.itemsList);
    }
}
