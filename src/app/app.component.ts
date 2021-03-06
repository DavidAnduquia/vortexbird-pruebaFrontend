import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vortexbird-prueba-frotend';

  public declare nombreUsuario: any;
  
  public isAuth(): boolean {
    if (!localStorage.getItem('usuario')) {
      return false;
    }
    this.nombreUsuario = localStorage.getItem('usuario');
    return true;
    // return !!localStorage.getItem('usuario');
  }
}
