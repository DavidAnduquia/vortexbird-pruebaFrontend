import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMovies'
})
export class FilterMoviesPipe implements PipeTransform {

      transform(proyectos:any, strBusqueda : string){
        if(!proyectos) return [];
        if(!strBusqueda) return proyectos;
        strBusqueda = strBusqueda.toLowerCase();
        return proyectos.filter( (datos: { nombre: string; admin: string; }) => {
        return datos.nombre.toLowerCase().includes(strBusqueda)  || datos.admin.toLowerCase().includes(strBusqueda) ;
      });
}

}
