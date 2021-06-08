import { animation, style, animate, trigger, transition, useAnimation, state, AnimationTriggerMetadata, AnimationMetadata } from '@angular/animations';

export const textButtonHoverAnimationTrigger: AnimationTriggerMetadata[] = [
    trigger('hovered', [
        state('left', style({
            color: '*',
        })),
        state('entered', style({
            color: 'var(--app-accent)',
        })),
        transition('entered => left', [
            animate('0.2s')
        ]),
        transition('left => entered', [
            animate('0.2s')
        ]),
    ]),
];

export const textButtonPressedAnimationTrigger: AnimationTriggerMetadata[] = [
    trigger('pressed',
        [
            state('released', style({
                opacity: 1,
            })),
            state('pressed', style({
                opacity: 0.6
            })),
            transition('released => pressed', [
                animate('0.05s')
            ]),
            transition('pressed => released', [
                animate('0.05s')
            ])
        ])
]
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