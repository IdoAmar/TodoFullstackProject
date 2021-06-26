import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';
import { GlobalVariablesService } from 'src/app/core/services/global-variables.service';
import { listDTO } from 'src/app/models/DTOs/listDTO.model';
import { ColorsList } from 'src/app/models/generic-models/colors.model';
import { IconsList } from 'src/app/models/generic-models/icons.model';
import { Theme } from 'src/app/models/types/theme-type.model';
import { maxWordsValidator } from 'src/app/Validators/max-words.validator';

@Component({
    selector: 'app-list-edit-form',
    templateUrl: './list-edit-form.component.html',
    styleUrls: ['./list-edit-form.component.css']
})
export class ListEditFormComponent implements OnInit {

    theme$!: Observable<Theme>;
    listInfoForm!: FormGroup;
    listToEdit!: listDTO;
    routeParam!: string;

    constructor(
        private global: GlobalVariablesService,
        @Inject(IconsList) public icons: string[],
        @Inject(ColorsList) public colors: string[],
        private data: DataService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    async ngOnInit(): Promise<void> {
        this.theme$ = this.global.currentTheme$;
        this.routeParam = this.route.snapshot.params.id;
        this.listInfoForm = new FormGroup(
            {
                'caption': new FormControl("", [
                    Validators.required
                ]),
                'description': new FormControl("", [
                    Validators.required,
                    Validators.minLength(30),
                    maxWordsValidator(10)
                ]),
                'icon': new FormControl("", [
                    Validators.required
                ]),
                'color': new FormControl("", [
                    Validators.required
                ]),
            }
        )
        if (this.routeParam != "-1") {
            this.listToEdit = await this.data.GetList(this.routeParam);

            this.listInfoForm.setValue({
                caption: this.listToEdit.caption,
                description: this.listToEdit.description,
                icon: this.listToEdit.icon,
                color: this.listToEdit.color
            })
        }
    }

    async Submit() {
        if (this.routeParam === "-1") {
            await this.data.CreateList(this.listInfoForm.value);
            this.router.navigate(['lists']);
        }
        else {
            await this.data.EditList({
                id: this.routeParam,
                caption: this.listInfoForm.value.caption,
                description: this.listInfoForm.value.description,
                icon: this.listInfoForm.value.icon,
                color: this.listInfoForm.value.color
            });
            this.router.navigate(['lists'])
        }
    }


}
