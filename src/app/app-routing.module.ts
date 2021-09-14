import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { PeliculaEditComponent } from './component/pelicula-edit/pelicula-edit.component';
import { PeliculaListComponent } from './component/pelicula-list/pelicula-list.component';
import { RegistroComponent } from './component/registro/registro.component';
import { UsuarioEditComponent } from './component/usuario-edit/usuario-edit.component';
import { UsuarioListComponent } from './component/usuario-list/usuario-list.component';
import { UsuarioSaveComponent } from './component/usuario-save/usuario-save.component';
import { PaymentListComponent } from './component/payment-list/payment-list.component';
import { PaymentEditComponent } from './component/payment-edit/payment-edit.component';
import { PaymentSaveComponent } from './component/payment-save/payment-save.component';
import { AuthGuard } from './guard/guard.guard';
import { PeliculasSaveComponent } from './component/peliculas-save/peliculas-save.component';
 
const routes: Routes = [
  { path: '',  component: PeliculaListComponent  },
  { path: 'pelicula-list',  component: PeliculaListComponent  },
  { path: 'pelicula-save',  component: PeliculasSaveComponent  },
  { path: 'save',  component: PeliculaEditComponent  },
  { path: 'pelicula-edit',  component: PeliculaEditComponent  },
  
  { path: 'usuario-list',  component: UsuarioListComponent  },
  { path: 'usuario-save',  component: UsuarioSaveComponent  },
  { path: 'usuario-edit',  component: UsuarioEditComponent  },

  { path: 'payment-list',  component: PaymentListComponent  },
  { path: 'payment-save',  component: PaymentSaveComponent },
  { path: 'payment-edit',  component: PaymentEditComponent  },

  { path: 'login',  component: LoginComponent  },
  { path: 'registro',  component: RegistroComponent }

];
// canActivate: [AuthGuard]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
