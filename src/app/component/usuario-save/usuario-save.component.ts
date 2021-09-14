import { Component, OnInit } from '@angular/core';
import { Enable } from 'src/app/domain/enable';
import { TipoUsuario } from 'src/app/domain/TipoUsuario';
import { Usuario } from 'src/app/domain/Usuario';
import { EnableService } from 'src/app/service/enable.service';
import { TipoUsuarioService } from 'src/app/service/tipo-usuario.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-save',
  templateUrl: './usuario-save.component.html',
  styleUrls: ['./usuario-save.component.css']
})
export class UsuarioSaveComponent implements OnInit {
  public usuario!:Usuario;
  public enables!:Enable[];
  public tipos!:TipoUsuario[];

  public showMsg:boolean=false;
  public messages:string[]=[""];

  constructor(
    public usuarioService:UsuarioService,
    public enableService:EnableService,
    public tipoService:TipoUsuarioService) { }



  ngOnInit(): void {
    this.usuario=new Usuario("","","","","","Y");
    this.findAllEnable();
    this.findAllTipos();
  }

  public findAllEnable():void{
    this.enables=this.enableService.findAll();
  }

  public findAllTipos():void{
    this.tipos=this.tipoService.findAll()
  }

  public save():void{
     //console.table(this.customer);
    this.messages=[""];
     

    this.usuarioService.findById(this.usuario.email).subscribe(
      ok=>{
        this.messages[0] = " El ya existe";
      }, err =>{


        this.usuarioService.save(this.usuario).subscribe(
          ok => {
           this.showMsg=true;
           this.messages[0] = " El usuario se grabo con exito";
          }, err=>{
          
          }
          );
      }
    );

    }
}
