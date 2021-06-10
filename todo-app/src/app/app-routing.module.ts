import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/pages/home-page/home-page.component';
import { ItemsPageComponent } from './items/pages/items-page/items-page.component';
import { ListsPageComponent } from './lists/pages/lists-page/lists-page.component';

const routes: Routes = [
    {path:"Home",component: HomePageComponent, data: {animation:'HomePage'}},
    {path:"Lists",component: ListsPageComponent, data : {animation : 'ListsPage'}},
    {path:"Items",component: ItemsPageComponent, data : { animation: 'ItemsPage'}},
    {path:'', redirectTo:'/Home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 