import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Pelicula, RespuestaDB, PeliculaDetalle } from '../../interfaces/interface';
import { PeliservicesService } from '../../services/peliservices.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string = '';

  peliculas: Pelicula [] = []

  peliculaSeleccionada: PeliculaDetalle | undefined;

  constructor(private pelisService: PeliservicesService) { }

  ngOnInit(): void {

  }

 buscando(){
    this.pelisService.getSugerencias(this.termino)
      .subscribe(peli => this.peliculas = peli.results)
 }
  

 opcionSeleccionada(event: MatAutocompleteSelectedEvent){

    if(!event.option.value ){
      this.peliculaSeleccionada = undefined
      return;
    }
    
    const peli: PeliculaDetalle = event.option.value;
    this.termino = peli.title

    this.pelisService.getDetalles(peli.id!)
        .subscribe(resp => this.peliculaSeleccionada = resp)

 }

}
