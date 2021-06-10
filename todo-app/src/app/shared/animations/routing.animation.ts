import { trigger, transition, style, query, animateChild, animate, group } from "@angular/animations";
import { AbsoluteSourceSpan } from "@angular/compiler";

export const slideInAnimation =
    trigger('routeAnimations', [
        transition('* <=> *', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    width: '100%',
                    opacity: 1,
                })
            ],{ optional: true }
            ),
            query(':enter', [style({ opacity: 0 })],{ optional: true }),
            query(':leave', animateChild(),{ optional: true }),

            query(':leave', [
                animate('175ms', style({ opacity: 0 }))
            ],{ optional: true }
            ),
            query(':enter', [
                animate('175ms', style({ opacity: 1 }))
            ],{ optional: true }
            )
            ,
            query(':enter', animateChild(),{ optional: true }),
        ])
    ]);