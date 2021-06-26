import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from 'src/app/core/services/data.service';

@Injectable({
    providedIn: 'root'
})
export class ListsPageGuard implements CanActivate {

    constructor(
        private data: DataService,
        private router: Router) {
    }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{

        return from(this.data.GetAllListsCount()).pipe(
            map(c => c ? true : this.router.createUrlTree(['lists/-1/edit']))
        );

    }

}
