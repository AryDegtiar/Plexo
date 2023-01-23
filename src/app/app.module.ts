import { FooterComponent } from './generales/footer/footer.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './generales/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { BlogComponent } from './blog/blog.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    ActividadesComponent,
    ContactoComponent,
    LoginComponent,
    BlogComponent,
  ],
  imports: [
    BrowserModule, //importo el modulo de browser, que sirve para que la app funcione en el navegador
    AppRoutingModule, //importo el modulo de rutas, que sirve para configurar las rutas de la app y poder navegar entre ellas
    HttpClientModule //importo el modulo httpclientmodule, que sirve para hacer peticiones http

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
