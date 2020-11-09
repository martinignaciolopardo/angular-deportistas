import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Deportista } from '../lista-deportistas/Deportista';

@Component({
  selector: 'app-input-camisetas',
  templateUrl: './input-camisetas.component.html',
  styleUrls: ['./input-camisetas.component.scss']
})
export class InputCamisetasComponent implements OnInit {

  constructor() { }

  @Input() cantidad: number;
  @Input() max: number;
  @Output() cantidadChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() maximoReached: EventEmitter<string> = new EventEmitter<string>();

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

  masCantidad(): void{
    if (this.cantidad < this.max){
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    }
    else {
      this.maximoReached.emit('Se alcanzo el limite de camisetas');
    }
  }

  menosCantidad(): void{
    if (this.cantidad > 0) {
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
  }

  cambiarCant(event): void {
    console.log(event.key);
  }

}
