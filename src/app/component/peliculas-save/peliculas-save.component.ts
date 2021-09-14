import { Component, OnInit } from '@angular/core';
import { Enable } from 'src/app/domain/enable';
import { Pelicula } from 'src/app/domain/Pelicula';
import { EnableService } from 'src/app/service/enable.service';
import { FireStorageCloudService } from 'src/app/service/fire-storage-cloud.service';
import { PeliculaService } from 'src/app/service/pelicula.service';

@Component({
  selector: 'app-peliculas-save',
  templateUrl: './peliculas-save.component.html',
  styleUrls: ['./peliculas-save.component.css']
})
export class PeliculasSaveComponent implements OnInit {

  public pelicula!: Pelicula;
  public enables!:Enable[];

  public showMsg:boolean=false;
  public messages:string[]=[""];


  constructor(
 
    public peliculaService:PeliculaService,
    public enableService:EnableService) { }

  ngOnInit(): void {
    this.pelicula=new Pelicula(0,"","","","","Y","");
    this.findAllEnable();
   // this.save();
  }


  public findAllEnable():void{
    this.enables=this.enableService.findAll();
  }

  public save():void{
     //console.table(this.customer);
    this.messages=[""];
     this.peliculaService.save(this.pelicula).subscribe(
       ok => {
        this.showMsg=true;
        this.messages[0] = " La pelicula " + this.pelicula.nombre_pelicula  +  " se grabo con exito" ;
       // this.router.navigate(['/customer-list']);

        }, err=>{
         console.log(err.error.error);
         this.showMsg=true;
         this.messages=err.error.error;
       }
       );
  }

}
