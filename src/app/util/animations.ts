import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const fadeInBottom = trigger('fadeInBottom', [
  state('void', style({ opacity: 0, top: '-395px' })),
  transition(':enter', [animate('250ms 50ms')]),
]);
