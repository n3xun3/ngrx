import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducer } from './app-reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      mensaje: reducer,  // En lazamos el reducer con la propiedad mensaje que seria una porcion de ngrx Store

    }),
    StoreDevtoolsModule.instrument({
      maxAge: 10 //Numero máximo de acciones realizadas que veremos
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
