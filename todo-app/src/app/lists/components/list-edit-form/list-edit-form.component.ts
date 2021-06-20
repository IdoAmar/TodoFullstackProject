import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalVariablesService } from 'src/app/core/services/global-variables.service';
import { ColorsList } from 'src/app/models/colors.model';
import { IconsList } from 'src/app/models/icons.model';
import { Theme } from 'src/app/models/theme-type.model';

@Component({
  selector: 'app-list-edit-form',
  templateUrl: './list-edit-form.component.html',
  styleUrls: ['./list-edit-form.component.css']
})
export class ListEditFormComponent implements OnInit {

    _theme$! : Observable<Theme>;
  constructor(
      private global : GlobalVariablesService,
       @Inject(IconsList) public icons : string[],
       @Inject(ColorsList) public colors : string[]
      ) { }

  ngOnInit(): void {
      this._theme$ = this.global.currentTheme$;
  }

}
