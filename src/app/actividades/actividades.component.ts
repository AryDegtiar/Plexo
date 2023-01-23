import { ProductosService } from './../servicios/productos.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css'],
  changeDetection: ChangeDetectionStrategy.Default  //mantener esto en .default
})
export class ActividadesComponent implements OnInit {

  productos: any[] = [];  // creo una variable y su array vacio

  constructor(private productosService : ProductosService) { } //inyecto el servicio en el constructor, para poder usarlo en el ngOnInit

  ngOnInit(): void {
    this.productosService.getProductos().subscribe((data: any) => { //llamo al servicio y suscribo a la respuesta, data es el array de productos
      this.productos = data.content; //guardo en la variable productos el array de productos, content es el array de productos
      console.log(this.productos) //muestro en consola el array de productos
    });
  }




}
