import { Component } from '@angular/core';
import { Observable} from 'rxjs';
import { Store} from '@ngrx/store';
import { appState } from './app-reducer';
import * as fromMensaje from './mensaje.action'; // Importamos todo lo que se encuentre en este documento con el alias fromMensaje
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // variable que contiene un observable se le pone al final $
  dato$ : Observable<any>;

  constructor(private store : Store<appState>){

    this.dato$ = store.select('mensaje');
    console.log(this.dato$);
  }

  public spanishMensaje(){
    // dispatch no va a permitir en viar una acción
    this.store.dispatch(fromMensaje.spanish({payload:'Los colores', mensaje: 'Hola Mundo'}));

  }
  public englishMensaje(){
    this.store.dispatch(fromMensaje.english({payload:'Yelow', mensaje: 'Hellow World'}));
  }
}
