import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { ListsModule } from './lists/lists.module';
import { ItemsModule } from './items/items.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TitleComponent } from './components/title/title.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HeaderPresenterComponent } from './components/header-presenter/header-presenter.component';

@NgModule({
  declarations: [
    AppComponent,
    
    NavBarComponent,
    TitleComponent,
    HeaderPresenterComponent,
    ErrorPageComponent
  
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
