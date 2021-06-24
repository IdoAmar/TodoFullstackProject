import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';
import { ListCacheService } from 'src/app/core/services/list-cache.service';
import { listDTO } from 'src/app/models/DTOs/listDTO.model';

@Component({
    selector: 'app-lists-page',
    templateUrl: './lists-page.component.html',
    styleUrls: ['./lists-page.component.css']
})
export class ListsPageComponent implements OnInit {
    _lists$! : Promise<listDTO[]>
    constructor(
        private router: Router,
        private data : DataService,
        private listCache : ListCacheService) { }

    ngOnInit(): void {
        this._lists$ = this.data.GetAllLists();
    }

    CardClicked(list : listDTO) {
        this.listCache.CacheList(list);
        this.router.navigate(['/lists/'+ list.id])
    }
}
