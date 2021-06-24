import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-list-item-adder',
    templateUrl: './list-item-adder.component.html',
    styleUrls: ['./list-item-adder.component.css']
})
export class ListItemAdderComponent implements OnInit {

    @Output() newItemEvent = new EventEmitter<string>();
    constructor() { }

    ngOnInit(): void {
    }
    onItemAdded(value: string) {
        this.newItemEvent.emit(value);
    }
}
