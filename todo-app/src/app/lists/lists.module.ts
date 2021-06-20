import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListsPageComponent } from './pages/lists-page/lists-page.component';
import { SharedModule } from '../shared/shared.module';
import { ListEditPageComponent } from './pages/list-edit-page/list-edit-page.component';
import { ListEditFormComponent } from './components/list-edit-form/list-edit-form.component';
import { ListViewPageComponent } from './pages/list-view-page/list-view-page.component';



@NgModule({
  declarations: [
      ListsPageComponent,
      ListEditPageComponent,
      ListEditFormComponent,
      ListViewPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
      ListsPageComponent
  ]
})
export class ListsModule { }
