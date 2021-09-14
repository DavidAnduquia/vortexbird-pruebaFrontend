import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enable } from 'src/app/domain/enable';
import { Usuario } from 'src/app/domain/Usuario';
import { EnableService } from 'src/app/service/enable.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {

 
  public email!:string;
  public usuario!:Usuario;
  public enables!:Enable[];


  public showMsg:boolean=false;
  public messages:string[]=[""];

  constructor(public router:Router,
              public activatedRoute:ActivatedRoute,
              public usuarioService:UsuarioService,
              public enableService:EnableService) { }

  ngOnInit(): void {
    //let params=this.activatedRoute.params['_value'];
    //this.email=params.email;
    console.log(this.email)
    this.findById();
    this.findAllEnable();
  }

  public findAllEnable():void{
    this.enables=this.enableService.findAll();
  }

  public findById():void{
      this.usuarioService.findById(this.email).subscribe(data=>{
        this.usuario=data;
        console.table(this.usuario);
      })
  }

  public update():void{
    //console.table(this.customer);
   this.messages=[""];
    this.usuarioService.update(this.usuario).subscribe(
      ok => {
       this.showMsg=true;
       this.messages[0] = " El customer se actualizo con exito";
      }, err=>{
        console.log(err.error.error);
        this.showMsg=true;
        this.messages=err.error.error;
      }
      );
 }

}
