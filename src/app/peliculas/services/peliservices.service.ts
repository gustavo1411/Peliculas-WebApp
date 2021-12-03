import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RespuestaDB, Pelicula, PeliculaDetalle } from '../interfaces/interface';
import { environment } from '../../../environments/environment';

 const URL = environment.url
 const apiKey = environment.key

@Injectable({
  providedIn: 'root'
})
export class PeliservicesService {

  constructor(private http: HttpClient) { }

  private ejecutarQuery<T>(query: string) {
      query = URL + query
      query += `&api_key=${apiKey}&language=es`

      console.log(query)

      return this.http.get<T>(query);
  }


  getMovies() {
    return this.ejecutarQuery<RespuestaDB>('/discover/movie?primary_release_date.gte=2020-09-01&primary_release_date.lte=2020-10-27');
  }

  // getMovies (): Observable<RespuestaDB>{
  //   return this.http.get<RespuestaDB>(`${URL}/discover/movie?primary_release_date.gte=2020-09-01&primary_release_date.lte=2020-10-27&api_key=${apiKey}&language=es`)
  // }

  getPopulares () {

    const query = '/discover/movie?sort_by=popularity.desc';

    return this.ejecutarQuery<RespuestaDB>(query)
  }


  getDetalles(id: number) {
 
    return this.ejecutarQuery<PeliculaDetalle>(`/movie/${id}?a=1`)
  }

 getSugerencias(termino: string){
   return this.ejecutarQuery<RespuestaDB>(`/search/movie?query=${termino}`)
 }
}
