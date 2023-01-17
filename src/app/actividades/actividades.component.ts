import { ProductosService } from './../servicios/productos.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ActividadesComponent implements OnInit {

  productos: any[] = [];

  constructor(private productosService : ProductosService) { }

  ngOnInit(): void {
    this.productosService.getProductos().subscribe((data: any) => {
      this.productos = data.content;
      console.log(this.productos)
    });
  }




}
