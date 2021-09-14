import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/domain/Pelicula';
import { Usuario } from 'src/app/domain/Usuario';
import { PeliculaService } from 'src/app/service/pelicula.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-pelicula-list',
  templateUrl: './pelicula-list.component.html',
  styleUrls: ['./pelicula-list.component.css']
})
export class PeliculaListComponent implements OnInit {
    
  
  [x: string]: any;

  public titulo:string= "lista de clientes";
  public peliculas!:Pelicula[];

  public showMsg:boolean=false;
  public mss:String[] = [];

  constructor(public peliculaService:PeliculaService) { }

  ngOnInit(): void {
    this.findAll();
  }

   public findAll():void{

    this.peliculaService.findAll().subscribe(
      data=>{
        this.peliculas=data;
      },
      error=>{
        console.log("Error");
      });
   }


}
