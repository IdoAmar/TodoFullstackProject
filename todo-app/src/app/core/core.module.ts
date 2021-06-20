import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsList } from '../models/icons.model';
import { ColorsList } from '../models/colors.model';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
      {provide: IconsList, useValue: IconsList},
      {provide: ColorsList, useValue: ColorsList}
  ]
})
export class CoreModule { }
