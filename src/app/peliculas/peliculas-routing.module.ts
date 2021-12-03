import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';
import { DetallesComponent } from './components/detalles/detalles.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
    children:[
      {path:'peliculas', component: PeliculasComponent},
      {path: 'buscar', component: BuscarComponent},
      {path: 'detalles/:id', component: DetallesComponent },
      {path:'**', redirectTo:'peliculas'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculasRoutingModule { }
