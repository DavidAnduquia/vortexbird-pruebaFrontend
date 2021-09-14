import { Injectable } from '@angular/core';
//import { AngularFireStorage} from '@Angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class FireStorageCloudService {
/* 
  constructor( public storage:AngularFireStorage) { }

  subirImagen(file: any, path : string , nombre : string): Promise<string>{
    return new Promise( resolve => {
    
      const filePath = path + '/' + nombre;
      const ref = this.storage.ref(filePath);
      const task = ref.put(file);
      resolve('el enlace');
    });
   
}
*/
}
