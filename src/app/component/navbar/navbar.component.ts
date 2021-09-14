import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


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
