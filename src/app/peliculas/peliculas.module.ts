import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../material/material.module';
import { ImagenPipe } from './pipes/imagen.pipe';
import { PopularesComponent } from './components/populares/populares.component';
import { NgxModule } from '../ngx/ngx.module';
import { DetallesComponent } from './components/detalles/detalles.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PeliculaTarjetaComponent } from './components/pelicula-tarjeta/pelicula-tarjeta.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PeliculasComponent,
    BuscarComponent,
    HomeComponent,
    ImagenPipe,
    PopularesComponent,
    DetallesComponent,
    PeliculaTarjetaComponent
  ],
  imports: [
    CommonModule,
    PeliculasRoutingModule,
    MaterialModule,
    NgxModule,
    FlexLayoutModule,
    FormsModule
  ]
})
export class PeliculasModule { }
