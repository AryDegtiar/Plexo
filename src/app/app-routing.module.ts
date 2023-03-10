import { BlogComponent } from './blog/blog.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'actividades', component: ActividadesComponent },
  {path: 'contacto', component: ContactoComponent},
  {path:'blog',component: BlogComponent},
  {path:'**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
