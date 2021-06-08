import { animation, style, animate, trigger, transition, useAnimation, state, AnimationTriggerMetadata } from '@angular/animations';

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
            opacity:1,
        })),
        state('pressed', style({
            opacity:0.6            
        })),
        transition('released => pressed', [
            animate('0.05s')
        ]),
        transition('pressed => released',[
            animate('0.05s')
        ])
    ])
]