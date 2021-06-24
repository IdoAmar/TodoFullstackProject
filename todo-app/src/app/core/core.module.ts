import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorsList } from '../models/generic-models/colors.model';
import { IconsList } from '../models/generic-models/icons.model';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
      {provide: IconsList, useValue: IconsList},
      {provide: ColorsList, useValue: ColorsList}
  ]
})
export class CoreModule { }
