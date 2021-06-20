import { animation, style, animate, trigger, transition, useAnimation, state, AnimationTriggerMetadata, AnimationMetadata } from '@angular/animations';


export const txtBtnHoverInAnimation: AnimationMetadata[] = [
    animate('200ms' , style({
        color: 'var(--app-accent)',
    }))      
];
export const txtBtnHoverOutAnimation: AnimationMetadata[] = [
    animate('200ms',  style({
        color: 'var(--app-main-foreground)',
    }))
];

export const txtBtnPressedInAnimation: AnimationMetadata[] = [
    animate('80ms',style({
        opacity: 0.6,
    }))
]
export const txtBtnPressedOutAnimation: AnimationMetadata[] = [
    animate('80ms',style({
        opacity:1,
    }))
]
export const txtBtnDisabledInAnimation: AnimationMetadata[] = [
    animate('80ms',style({
        color:'var(--app-main-foreground)',
        opacity:0.8,
    }))
]