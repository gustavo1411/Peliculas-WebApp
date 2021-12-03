import { Component, OnInit } from '@angular/core';
import { Pelicula, RespuestaDB } from '../../interfaces/interface';
import { PeliservicesService } from '../../services/peliservices.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styles: [`
   mat-card {
     margin-top: 20px;
   }
  `]
})
export class PeliculasComponent implements OnInit {

  peliculas: Pelicula[] = []
  populares: Pelicula[] = []

  constructor(private pelisService: PeliservicesService) { }

  ngOnInit(): void {

   this.pelisService.getMovies()
      .subscribe(resp => {
        this.peliculas = resp.results
        // console.log(resp.results)
      })


   this.pelisService.getPopulares()
        .subscribe(resp => {
          this.populares = resp.results
          console.log(resp.results)
        })

  }

  verDetalle(id: number){

  }

}
