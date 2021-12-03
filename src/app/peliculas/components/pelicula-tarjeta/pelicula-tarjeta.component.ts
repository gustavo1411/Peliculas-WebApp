import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from '../../interfaces/interface';

@Component({
  selector: 'app-pelicula-tarjeta',
  templateUrl: './pelicula-tarjeta.component.html',
  styles: [`
  mat-card {
    margin-top: 20px;
  }
 `
  ]
})
export class PeliculaTarjetaComponent implements OnInit {

  @Input() pelicula! : Pelicula;

  constructor() { }

  ngOnInit(): void {
  }

}
