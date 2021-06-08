import { AnimationBuilder, AnimationMetadata } from '@angular/animations';
import { Directive, ElementRef, HostListener } from '@angular/core';
import { txtBtnHoverInAnimation, txtBtnHoverOutAnimation, txtBtnPressedInAnimation, txtBtnPressedOutAnimation } from '../animations/text-button.animation';
import { DocumentEventsService } from '../services/document-events.service';

@Directive({
  selector: '[appTextButtonAnimation]'
})
export class TextButtonAnimationDirective {

    isHovered = false;
    isPressed = false;
    //variable to distinguish if button is pressed outside the element
    isPressedOutsideElement = false;

    constructor(
        private _docEvent: DocumentEventsService,
        private _builder: AnimationBuilder,
        private _element: ElementRef
        ) { }

    ngOnInit(): void {

        
    }

    @HostListener('mouseenter')
    onMouseEntered() {
        if (!this.isPressed){
            this.isHovered = !this.isHovered;
            this.playAnimation(txtBtnHoverInAnimation);
        }
    }
    
    //check whether mouse pressed or not on mouse leave
    @HostListener('mouseleave')
    onMouseLeft() {
        if(!this.isPressed){
            this.isHovered = false;
            this.playAnimation(txtBtnHoverOutAnimation);
            console.log("hey");
            
        }
        else{
            this.isPressedOutsideElement = true;
        }
    }
    @HostListener('mousedown')
    OnMouseDown() {
        this.isPressed = true;
        this.playAnimation(txtBtnPressedInAnimation);
        // handeling mouse up on one time subscription to document event observer
        // why not use event? - because multiple event subscriptions are slower then observable
        let subscription = this._docEvent.documentMouseUp$.subscribe(
            {
                next: (e: Event) => {
                    // if mouse is pressed and inside the element
                    if(!this.isPressedOutsideElement){
                        this.isPressed = false;
                        this.playAnimation(txtBtnPressedOutAnimation);
                    }
                    // if mouse is pressed and outside the element
                    else{
                        this.isPressed = false;
                        this.isHovered = false;
                        this.isPressedOutsideElement = false;
                        this.playAnimation(txtBtnPressedOutAnimation);
                        this.playAnimation(txtBtnHoverOutAnimation);
                    }
                    subscription.unsubscribe();
                }
            }
        )
    }

    private playAnimation(animationMetaData: AnimationMetadata[]):void{
        const animation = this._builder.build(animationMetaData);
        const player = animation.create(this._element.nativeElement);
        player.play();
    }
}
