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

    constructor(private _docEvent: DocumentEventsService) { }

    ngOnInit(): void {

        
    }
}
