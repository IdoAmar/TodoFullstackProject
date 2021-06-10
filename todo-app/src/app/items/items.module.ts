import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsPageComponent } from './pages/items-page/items-page.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
      ItemsPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
      ItemsPageComponent
  ]
})
export class ItemsModule { }
