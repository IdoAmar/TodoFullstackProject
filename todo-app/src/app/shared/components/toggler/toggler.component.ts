import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-toggler',
  templateUrl: './toggler.component.html',
  styleUrls: ['./toggler.component.css']
})
export class ThemeTogglerComponent implements OnInit {

    @Output() TogglerClicked: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  constructor() { }

  ngOnInit(): void {
  }
  Toggled(eventArgs : MouseEvent){
      this.TogglerClicked.emit(eventArgs);
  }

}
