import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { StatusDisplayerComponent } from './components/status-displayer/status-displayer.component';



@NgModule({
  declarations: [
      HomePageComponent,
      StatusDisplayerComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
      HomePageComponent
  ]
})
export class HomeModule { }
