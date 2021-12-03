import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliservicesService } from '../../services/peliservices.service';
import { switchMap } from 'rxjs/operators';
import { PeliculaDetalle } from '../../interfaces/interface';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styles: [`
  .img-card{
    width: 50%;
    margin-bottom: 20px;
  }
  
  `]
})
export class DetallesComponent implements OnInit {

  pelicula!: PeliculaDetalle;


  constructor(private activatedRoute:ActivatedRoute,
              private router: Router,
              private pelisService: PeliservicesService) { }

  ngOnInit(): void {

    this.activatedRoute.params
          .pipe(
            switchMap(({id}) => this.pelisService.getDetalles(id))
          )
          .subscribe(resp => {
            this.pelicula = resp;
            // console.log(resp)
          })

   

  }

}
