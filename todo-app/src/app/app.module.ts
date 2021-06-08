import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavButtonComponent } from './components/nav-button/nav-button.component';
import { ListCardComponent } from './components/list-card/list-card.component';
import { TextButtonAnimationDirective } from './directives/text-button-animation.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavButtonComponent,
    ListCardComponent,
    TextButtonAnimationDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
