import  { props , createAction } from '@ngrx/store';

export const spanish = createAction('[Mensaje] Spanish', props<{ payload: string, mensaje: string  }>());
export const english = createAction('[Mensaje] English', props<{ payload: string, mensaje: string }>());
