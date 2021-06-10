import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListsPageComponent } from './pages/lists-page/lists-page.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
      ListsPageComponent
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
