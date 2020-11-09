import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { CarritoCamisetasService } from '../Carrito-Camisetas.service';
import { Deportista } from '../lista-deportistas/Deportista';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  listaDeCompras$: Observable <Deportista[]>;

  constructor(private carrito: CarritoCamisetasService) {
    // carrito.listaDeCompras.subscribe((observable)=> this.listaDeCompras = observable); equivalente
    this.listaDeCompras$ = carrito.listaDeCompras.asObservable();
  }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

}
