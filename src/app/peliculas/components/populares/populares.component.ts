import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Pelicula, PeliculaDetalle } from '../../interfaces/interface';
import { PeliservicesService } from '../../services/peliservices.service';

@Component({
  selector: 'app-populares',
  templateUrl: './populares.component.html',
  styles: [`
  mat-card {
    margin-top: 20px;
  }
 `
  ]
})
export class PopularesComponent implements OnInit {

  @Input() pelicula!: Pelicula;

  

  constructor(private pelisService: PeliservicesService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

 
  }

}
