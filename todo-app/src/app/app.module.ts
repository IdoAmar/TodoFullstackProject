import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { ListsModule } from './lists/lists.module';
import { ItemsModule } from './items/items.module';

@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HomeModule,
    ListsModule,
    ItemsModule,
    
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
