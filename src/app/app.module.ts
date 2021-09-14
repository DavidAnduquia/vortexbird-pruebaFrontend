import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule  } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//import { AngularFireModule } from '@angular/fire'; 

import { FilterMoviesPipe } from './pipes/filter-movies.pipe';
import { UsuarioListComponent } from './component/usuario-list/usuario-list.component';
import { UsuarioSaveComponent } from './component/usuario-save/usuario-save.component';
import { UsuarioEditComponent } from './component/usuario-edit/usuario-edit.component';
import { LoginComponent } from './component/login/login.component';
import { PeliculaListComponent } from './component/pelicula-list/pelicula-list.component';

import { PeliculaEditComponent } from './component/pelicula-edit/pelicula-edit.component';
import { RegistroComponent } from './component/registro/registro.component';
import { PaymentListComponent } from './component/payment-list/payment-list.component';
import { PaymentEditComponent } from './component/payment-edit/payment-edit.component';
import { PaymentSaveComponent } from './component/payment-save/payment-save.component';
import { PeliculasSaveComponent } from './component/peliculas-save/peliculas-save.component';


@NgModule({
  declarations: [
      AppComponent,       
      FilterMoviesPipe,
      UsuarioListComponent,
      UsuarioSaveComponent,
      UsuarioEditComponent,
      LoginComponent,
      PeliculaListComponent,
      PeliculaEditComponent,
      RegistroComponent,
      PaymentListComponent,
      PaymentEditComponent,
      PaymentSaveComponent,
      PeliculasSaveComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    //AngularFireStorage,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
