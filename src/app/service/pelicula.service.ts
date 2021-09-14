import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pelicula } from '../domain/Pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  private url: string = environment.apiUrl + 'pelicula/'


  constructor(public httpClient: HttpClient) { }

  /*
    createTokenHeader():HttpHeaders{
      let token=localStorage.getItem('token');
      //console.log(token)
      let headers=new HttpHeaders({'Authorization':token});
      return headers;
    }
  */


  public findAll(): Observable<any> {
   
    return this.httpClient.get(this.url + 'findAll');
  }

  public findById(email: String): Observable<any> {
   
    return this.httpClient.get(this.url + 'finById/' + email);
  }

  public save(pelicula: Pelicula): Observable<any> {
    return this.httpClient.post(this.url + 'save', pelicula);
  }
 
  public update(pelicula: Pelicula): Observable<any> {

    return this.httpClient.put(this.url + 'update', pelicula);
  }

 
}
