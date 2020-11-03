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
        nombre: 'Diego Armando Maradona',
        trofeo: 20,
        informacion: 'Descripcion de Maradona',
        foto: 'assets/images/maradona.jpeg'
      },
      {
        deporte: 'asdasd',
        nombre: 'ftjgfgj',
        trofeo: 0,
        informacion: 'sfdghdfg',
        foto: 'assets/images/maradona.jpeg'
      }, 
      {
        deporte: 'ppppp',
        nombre: 'ppppp',
        trofeo: 15,
        informacion: 'ppppp',
        foto: 'assets/images/maradona.jpeg'
      }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
 