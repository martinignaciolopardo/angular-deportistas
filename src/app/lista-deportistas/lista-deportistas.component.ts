import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-deportistas',
  templateUrl: './lista-deportistas.component.html',
  styleUrls: ['./lista-deportistas.component.css']
})
export class ListaDeportistasComponent implements OnInit {

  deportista = {
    "deporte":"Futbol",
    "nombre": "Diego Armando Maradona",
    "club": ["Argentinos Junior","Boca Juniors","Seleccion Argentina"],
    "informacion": "Descripcion Maradona",
    "foto": "assets/images/maradona.jpeg"

  }

  constructor() { }

  ngOnInit(): void {
  }

}
