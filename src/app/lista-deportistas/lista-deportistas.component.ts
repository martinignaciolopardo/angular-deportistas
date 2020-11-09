import { CarritoCamisetasService } from '../Carrito-Camisetas.service';
import { Component, OnInit } from '@angular/core';
import { Deportista } from './Deportista';

@Component({
  selector: 'app-lista-deportistas',
  templateUrl: './lista-deportistas.component.html',
  styleUrls: ['./lista-deportistas.component.css']
})
export class ListaDeportistasComponent implements OnInit {

  deportistas: Deportista[] =
    [
      {
        deporte: 'Futbol',
        nombre: 'Maradona (10)',
        camiseta: 6,
        informacion: 'Autografiada',
        foto: 'assets/images/maradona.jpeg',
        favorito: false,
        cantidad: 0
      },
      {
        deporte: 'Hockey',
        nombre: 'Aymar (8)',
        camiseta: 9,
        informacion: 'Autografiada',
        foto: 'assets/images/aymar.jpeg',
        favorito: false,
        cantidad: 0
      },
      {
        deporte: 'Rugby',
        nombre: 'Creevy (16)',
        camiseta: 8,
        informacion: 'Autografiada',
        foto: 'assets/images/creevy.jpeg',
        favorito: false,
        cantidad: 0
      }
    ];

  constructor(private carrito: CarritoCamisetasService) {

  }

  ngOnInit(): void {
  }

  agregarAlCarrito(deportista): void {
    this.carrito.agregarAlCarrito(deportista);
    deportista.camiseta -= deportista.cantidad;
    deportista.cantidad = 0;
  }

  // tslint:disable-next-line: typedef
  maximoReached(m: string) {
    alert(m);
  }

}
