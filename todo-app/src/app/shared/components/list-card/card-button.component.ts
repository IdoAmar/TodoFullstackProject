import { Component, Input, OnInit } from '@angular/core';
import { listDTO } from 'src/app/models/DTOs/listDTO.model';
import { Color } from 'src/app/models/types/color-type.model';
import { Icon } from 'src/app/models/types/icon-type.model';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.css']
})
export class ListCardComponent implements OnInit {
    @Input() isAdder : boolean = false;
    @Input() list! : listDTO;
    
  constructor() { }

  ngOnInit(): void {
  }

}
