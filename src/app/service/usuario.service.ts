import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../domain/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url: string = environment.apiUrl + 'usuario/'


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

  public save(usuario: Usuario): Observable<any> {
    return this.httpClient.post(this.url + 'save', usuario);
  }
 
  public update(usuario: Usuario): Observable<any> {

    return this.httpClient.put(this.url + 'update', usuario);
  }

 
}
