import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextButtonAnimationDirective } from './directives/text-button-animation.directive';

import { ListCardComponent } from './components/list-card/card-button.component';
import { ScrollViewComponent } from './components/scroll-view/scroll-view.component';
import { ShortcutButtonComponent } from './components/arrow-animated-button/arrow-animated-button.component';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextButtonComponent } from './components/text-button/text-button.component';
import { ThemeTogglerComponent } from './components/toggler/toggler.component';
import {MatSelectModule} from '@angular/material/select';
import { ListItemTickerComponent } from './components/list-item-ticker/list-item-ticker.component';
import { ListItemAdderComponent } from './components/list-item-adder/list-item-adder.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TextButtonAnimationDirective,

    ListCardComponent,
    ScrollViewComponent,
    ShortcutButtonComponent,
    TextButtonComponent,
    ThemeTogglerComponent,
    ListItemTickerComponent,
    ListItemAdderComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  exports:[
    TextButtonAnimationDirective,

    MatIconModule,
    MatSelectModule,

    ListCardComponent,
    ScrollViewComponent,
    ShortcutButtonComponent,
    TextButtonComponent,
    ThemeTogglerComponent,
    ListItemTickerComponent,
    ListItemAdderComponent,

  ]
})
export class SharedModule { }
