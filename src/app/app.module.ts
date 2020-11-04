import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaDeportistasComponent } from './lista-deportistas/lista-deportistas.component';

import { FormsModule } from '@angular/forms';
import { DeportesComponent } from './deportes/deportes.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { CarritoComponent } from './carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDeportistasComponent,
      DeportesComponent,
      HomeComponent,
      CarritoComponent,
      DeportesComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
