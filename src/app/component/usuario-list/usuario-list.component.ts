import { Component, OnInit } from '@angular/core';
import { TipoUsuario } from 'src/app/domain/TipoUsuario';
import { Usuario } from 'src/app/domain/Usuario';
import { TipoUsuarioService } from 'src/app/service/tipo-usuario.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  [x: string]: any;

  public titulo:string= "lista de clientes";
  public usuarios!:Usuario[];
  public showMsg:boolean=false;
  public messages!:string[];

  constructor(public usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.findAll();
    this.findTipos()
  }


   public findAll():void{

    this.usuarioService.findAll().subscribe(
      data=>{
        this.usuarios=data;
      },
      error=>{
        console.log("Error");
      });
   }

}
