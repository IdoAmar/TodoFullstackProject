import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { maxWordsValidator } from 'src/app/Validators/max-words.validator';

@Component({
    selector: 'app-list-item-adder',
    templateUrl: './list-item-adder.component.html',
    styleUrls: ['./list-item-adder.component.css']
})
export class ListItemAdderComponent implements OnInit {

    @Output() newItemEvent = new EventEmitter<string>();
    addItemForm!: FormGroup;
    constructor() { }

    ngOnInit(): void {

        this.addItemForm = new FormGroup(
            {
                'caption': new FormControl("", [
                    Validators.required,
                    Validators.minLength(10),
                    maxWordsValidator(3)
                ])
            }
        )
    }
    onItemAdded() {
        this.newItemEvent.emit(this.addItemForm.value.caption);
        this.addItemForm.reset();
    }
}
