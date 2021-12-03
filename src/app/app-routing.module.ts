import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'peliculas',
    loadChildren: () => import('./peliculas/peliculas.module').then(m => m.PeliculasModule)
  },
  {
    path:'**',
    redirectTo: 'peliculas'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
