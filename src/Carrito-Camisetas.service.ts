import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Deportista } from './app/lista-deportistas/Deportista';

@Injectable({
  providedIn: 'root'
})
export class CarritoCamisetasService {

  // tslint:disable-next-line: variable-name
  private _listaDeCompras: Deportista[] = [];
  listaDeCompras: BehaviorSubject<Deportista[]> = new BehaviorSubject([]);

  constructor() { }

  // tslint:disable-next-line: typedef
  agregarAlCarrito(deportista: Deportista) {
    // tslint:disable-next-line: triple-equals
    let item: Deportista = this._listaDeCompras.find((v1) => v1.nombre == deportista.nombre);
    if (!item){
      this._listaDeCompras.push({... deportista});
    }
    else {
      item.cantidad += deportista.cantidad;
    }
    console.log(this._listaDeCompras);
    this.listaDeCompras.next(this._listaDeCompras);
  }

}
