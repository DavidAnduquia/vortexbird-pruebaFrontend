import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enable } from 'src/app/domain/enable';
import { Pelicula } from 'src/app/domain/Pelicula';
import { PeliculaService } from 'src/app/service/pelicula.service';

@Component({
  selector: 'app-pelicula-edit',
  templateUrl: './pelicula-edit.component.html',
  styleUrls: ['./pelicula-edit.component.css']
})
export class PeliculaEditComponent implements OnInit {

  public idpelicula!:string;
  public pelicula!:Pelicula;
  public enables!:Enable[];


  public showMsg:boolean=false;
  public messages:string[]=[""];

  constructor(public router:Router,
              public activatedRoute:ActivatedRoute,
              public peliculaService:PeliculaService,
              ) { }
              //public enableService:EnableService
  ngOnInit(): void {
    //let params=this.activatedRoute.params['_value'];
    //this.email=params.idpelicula;
    console.log(this.idpelicula)
    this.findById();
    this.findAllEnable();
  }

  public findAllEnable():void{
   // this.enables=this.enableService.findAll();
  }

  public findById():void{
      this.peliculaService.findById(this.idpelicula).subscribe(data=>{
        this.pelicula=data;
        console.table(this.pelicula);
      })
  }

  public update():void{
    //console.table(this.customer);
   this.messages=[""];
    this.peliculaService.update(this.pelicula).subscribe(
      ok => {
       this.showMsg=true;
       this.messages[0] = "La pelicula <<"+ this.pelicula.nombre_pelicula +">> se actualizo con exito";
      }, err=>{
        console.log(err.error.error);
        this.showMsg=true;
        this.messages=err.error.error;
      }
      );
 }

}
