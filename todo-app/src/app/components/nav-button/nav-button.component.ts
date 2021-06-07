import { Component, OnInit } from '@angular/core';
import { textButtonHoverAnimationTrigger } from '../../animations/text-button-hover.animation';

@Component({
  animations:textButtonHoverAnimationTrigger,
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.css']
})
export class NavButtonComponent implements OnInit {

  isHovered = false;

  constructor() { }

  ngOnInit(): void {
  }
  onHovered(){
    this.isHovered = !this.isHovered;
  }

}
