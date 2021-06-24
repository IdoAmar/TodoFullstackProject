import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';
import { GlobalVariablesService } from 'src/app/core/services/global-variables.service';
import { ColorsList } from 'src/app/models/generic-models/colors.model';
import { IconsList } from 'src/app/models/generic-models/icons.model';
import { Theme } from 'src/app/models/types/theme-type.model';

@Component({
    selector: 'app-list-edit-form',
    templateUrl: './list-edit-form.component.html',
    styleUrls: ['./list-edit-form.component.css']
})
export class ListEditFormComponent implements OnInit {
    _theme$!: Observable<Theme>;
    _listInfoForm!: FormGroup;
    constructor(
        private global: GlobalVariablesService,
        @Inject(IconsList) public icons: string[],
        @Inject(ColorsList) public colors: string[],
        private data : DataService,
        private route : ActivatedRoute,
        private router : Router
    ) { }

    ngOnInit(): void {
        this._theme$ = this.global.currentTheme$;

        this._listInfoForm = new FormGroup(
            {
                'caption': new FormControl("", [
                    Validators.required
                ]),
                'description': new FormControl("", [
                    Validators.required
                ]),
                'icon': new FormControl("", [
                    Validators.required
                ]),
                'color': new FormControl("", [
                    Validators.required
                ]),
            }
        )
    }

    async Submit(){
        if(this.route.snapshot.params.id === "-1")
        {
            await this.data.CreateList(this._listInfoForm.value)
            this.router.navigate(['lists'])
        }
    }


}
