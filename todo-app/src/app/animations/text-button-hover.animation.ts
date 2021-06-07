import { animation, style, animate, trigger, transition, useAnimation, state, AnimationTriggerMetadata } from '@angular/animations';

export const textButtonHoverAnimationTrigger: AnimationTriggerMetadata[] = [
    trigger('hovered', [
        state('left', style({
            color: '*',
            opacity: 1,
        })),
        state('entered', style({
            color: 'var(--app-accent)',
            opacity: 1,
        })),
        transition('entered => left', [
            animate('0.2s')
        ]),
        transition('left => entered', [
            animate('0.2s')
        ]),
    ]),
]