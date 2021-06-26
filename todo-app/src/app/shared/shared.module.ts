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
import { ListViewWidgetComponent } from './components/list-view-widget/list-view-widget.component';
import { ListItemTickerComponent } from './components/list-item-ticker/list-item-ticker.component';
import { ListItemAdderComponent } from './components/list-item-adder/list-item-adder.component';
import { UrlPresenterComponent } from './components/url-presenter/url-presenter.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TextButtonAnimationDirective,

    ListCardComponent,
    ScrollViewComponent,
    ShortcutButtonComponent,
    TextButtonComponent,
    ThemeTogglerComponent,
    ListViewWidgetComponent,
    ListItemTickerComponent,
    ListItemAdderComponent,
    UrlPresenterComponent,
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

    ListCardComponent,
    ScrollViewComponent,
    ShortcutButtonComponent,
    TextButtonComponent,
    ThemeTogglerComponent,
    ListViewWidgetComponent,
    MatIconModule,
    MatSelectModule,
    ListItemTickerComponent,
    ListItemAdderComponent,
    UrlPresenterComponent,

  ]
})
export class SharedModule { }
