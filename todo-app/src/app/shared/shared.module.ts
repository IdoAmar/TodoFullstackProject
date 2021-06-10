import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextButtonAnimationDirective } from './directives/text-button-animation.directive';

import { ListCardComponent } from './components/list-card/card-button.component';
import { NavButtonComponent } from './components/nav-button/nav-button.component';
import { ScrollViewComponent } from './components/scroll-view/scroll-view.component';
import { ShortcutButtonComponent } from './components/arrow-animated-button/arrow-animated-button.component';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextButtonComponent } from './components/text-button/text-button.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TitleComponent } from './components/title/title.component';
import { ThemeTogglerComponent } from './components/toggler/toggler.component';



@NgModule({
  declarations: [
    TextButtonAnimationDirective,
    
    TitleComponent,
    NavBarComponent,
    NavButtonComponent,

    ListCardComponent,
    ScrollViewComponent,
    ShortcutButtonComponent,
    TextButtonComponent,
    ThemeTogglerComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatIconModule,

  ],
  exports:[
    TextButtonAnimationDirective,

    NavBarComponent,
    TitleComponent,
    NavButtonComponent,

    ListCardComponent,
    ScrollViewComponent,
    ShortcutButtonComponent,

  ]
})
export class SharedModule { }
