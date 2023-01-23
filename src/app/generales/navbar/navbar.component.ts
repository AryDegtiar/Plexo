import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent  implements OnInit {
  inicioActivo = true;
  serviciosActivo = false;
  loginActivo = false;
  contactoActivo = false;

  //el router es para poder navegar entre las páginas y cambie los estados de los botones
  constructor(private router: Router ) { }

  ngOnInit(): void {
    //para la primera vez que cargue la página
    this.inicioActivo = true;
    this.serviciosActivo = false;
    this.loginActivo = false;
    this.contactoActivo = false;
  }
  //creo la funcion ya que el router no me permite pasar parámetros
  irInicio(){
    this.inicioActivo = true;
    this.serviciosActivo = false;
    this.loginActivo = false;
    this.contactoActivo = false;
    this.router.navigate(['/inicio']);
  }
  irServicios(nombre: string){
    this.inicioActivo = false;
    this.serviciosActivo = true;
    this.loginActivo = false;
    this.contactoActivo = false;
    switch(nombre){
      case 'actividades': this.router.navigate(['/actividades']); break;
      case 'blog': this.router.navigate(['/blog']); break;
      case 'tienda': this.router.navigate(['/tienda']); break;
    }
  }
  irLogin(){
    this.inicioActivo = false;
    this.serviciosActivo = false;
    this.loginActivo = true;
    this.contactoActivo = false;
    this.router.navigate(['/login']);
  }
  irContacto(){
    this.inicioActivo = false;
    this.serviciosActivo = false;
    this.loginActivo = false;
    this.contactoActivo = true;
    this.router.navigate(['/contacto']);
  }
}

