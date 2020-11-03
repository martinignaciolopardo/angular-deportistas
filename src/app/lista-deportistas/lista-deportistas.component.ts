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
        nombre: 'Diego A. Maradona',
        camiseta: 20,
        informacion: 'sarasdar',
        foto: 'assets/images/maradona.jpeg',
        favorito: false,
        cantidad: 0
      },
      {
        deporte: 'asdasd',
        nombre: 'ftjgfgj',
        camiseta: 0,
        informacion: 'sfdghdfg',
        foto: 'assets/images/maradona.jpeg',
        favorito: false,
        cantidad: 0
      },
      {
        deporte: 'ppppp',
        nombre: 'ppppp',
        camiseta: 15,
        informacion: 'ppppp',
        foto: 'assets/images/maradona.jpeg',
        favorito: false,
        cantidad: 0
      }
    ];

  constructor() { }

  ngOnInit(): void {
  }

  masCamisetas(deportista: Deportista): void{
    if (deportista.cantidad < deportista.camiseta){
      deportista.cantidad++;
    }
  }

  menosCamisetas(deportista: Deportista): void{
    if (deportista.cantidad > 0) {
      deportista.cantidad--;
    }
  }

}
