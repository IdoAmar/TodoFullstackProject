import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavButtonComponent } from './components/nav-button/nav-button.component';
import { ListCardComponent } from './components/list-card/list-card.component';
import { TextButtonAnimationDirective } from './directives/text-button-animation.directive';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { ScrollViewComponent } from './components/scroll-view/scroll-view.component';
import {MatIconModule} from '@angular/material/icon';
import { ListsPageComponent } from './components/pages/lists-page/lists-page.component';
import { ItemsPageComponent } from './components/pages/items-page/items-page.component';
import { ShortcutButtonComponent } from './components/shortcut-button/shortcut-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavButtonComponent,
    ListCardComponent,
    TextButtonAnimationDirective,
    HomePageComponent,
    ScrollViewComponent,
    ListsPageComponent,
    ItemsPageComponent,
    ShortcutButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
