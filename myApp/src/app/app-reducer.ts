import { createReducer, on, Action } from '@ngrx/store';
import * as fromMensaje from './mensaje.action';

// Creamos interfaz
export interface appState {
  mensaje:string
}

// Damos valor a la propedad texto
export const initialState= {
  mensaje : ' Codigo Mentor',
}

const _counterReducer = createReducer(
  initialState,
  on(fromMensaje.spanish, (state, {payload, mensaje}) => ({ ...state, mensaje: mensaje, payload: payload })),
  on(fromMensaje.english, (state, {payload, mensaje}) => ({ ...state, mensaje: mensaje, payload: payload })),
);

export function reducer (state: appState = initialState, action: Action) {
  return _counterReducer(state, action);
}
