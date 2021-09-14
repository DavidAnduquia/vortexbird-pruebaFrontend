import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../domain/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public httpClient:HttpClient) { }

  private url:string=environment.apiUrl+'login';

  public loginUser(user:Usuario):Observable<any>{
    return this.httpClient.post(this.url,user);
  }

  public loggedIn():boolean{
    return !!localStorage.getItem('usuario');
  }

  public logOut():void{
    localStorage.removeItem('usuario');
  }
}
