import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/pages/home-page/home-page.component';
import { ItemsPageComponent } from './items/pages/items-page/items-page.component';
import { ListEditPageComponent } from './lists/pages/list-edit-page/list-edit-page.component';
import { ListViewPageComponent } from './lists/pages/list-view-page/list-view-page.component';
import { ListsPageComponent } from './lists/pages/lists-page/lists-page.component';

const routes: Routes = [
    {path:"home",component: HomePageComponent, data: {animation : 'homePage'}},
    {path:"lists",component: ListsPageComponent, data : {animation : 'listsPage'}},
    {path:"lists/:id",component: ListViewPageComponent, data : {animation:'listViewPage'}},
    {path:"lists/:id/edit",component: ListEditPageComponent, data: {animation : 'listEditPage'}},
    {path:"items",component: ItemsPageComponent, data : {animation : 'itemsPage'}},
    {path:'', redirectTo:'/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 