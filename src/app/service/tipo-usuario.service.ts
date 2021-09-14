import { Injectable } from '@angular/core';
import { TipoUsuario } from '../domain/TipoUsuario';

@Injectable({
  providedIn: 'root'
})
export class TipoUsuarioService {

  public tipos:TipoUsuario[];
  constructor() {

    this.tipos=[
      {id:'tp02',name:'Cliente'},
      {id:'tp01',name:'Administrador'}
    ];
  }


  public findAll():TipoUsuario[]{
    return this.tipos;
  }
}
