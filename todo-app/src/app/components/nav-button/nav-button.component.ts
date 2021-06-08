import { Component, OnInit } from '@angular/core';
import { DocumentEventsService } from 'src/app/services/document-events.service';
import { textButtonHoverAnimationTrigger, textButtonPressedAnimationTrigger } from '../../animations/text-button.animation';

@Component({
    animations:
        [textButtonHoverAnimationTrigger,
            textButtonPressedAnimationTrigger],
    selector: 'app-nav-button',
    templateUrl: './nav-button.component.html',
    styleUrls: ['./nav-button.component.css']
})
export class NavButtonComponent implements OnInit {

    isHovered = false;
    isPressed = false;
    //variable to distinguish if button is pressed outside the element
    isPressedOutsideElement = false;

    constructor(private _docEvent: DocumentEventsService) { }

    ngOnInit(): void {

        
    }

    //if pressed dont animate again
    onMouseEntered() {
        if (!this.isPressed) this.isHovered = !this.isHovered;
    }
    
    //check whether mouse pressed or not on mouse leave
    onMouseLeft() {
        if(!this.isPressed){
            this.isHovered = false;
        }
        else{
            this.isPressedOutsideElement = true;
        }
    }

    OnMouseDown() {
        this.isPressed = true;

        // handeling mouse up on one time subscription to document event observer
        // why not use event? - because multiple event subscriptions are slower then observable
        let subscription = this._docEvent.documentMouseUp$.subscribe(
            {
                next: (e: Event) => {
                    // if mouse is pressed and inside the element
                    if(!this.isPressedOutsideElement){
                        this.isPressed = false;
                        
                    }
                    // if mouse is pressed and outside the element
                    else{
                        this.isPressed = false;
                        this.isHovered = false;
                        this.isPressedOutsideElement = false;
                    }
                    subscription.unsubscribe();
                }
            }
        )
    }

}
