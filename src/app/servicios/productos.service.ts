import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class ProductosService {
  url = 'http://localhost:8081/productos'; //url de la api de productos

  constructor(private http: HttpClient) { //como parametro del constructor le paso el httpclient, para poder hacer peticiones http
  }

  getProductos() { //creo un metodo que me devuelva los productos
    return this.http.get(this.url); //hago una peticion get a la url de la api de productos,que me devuelve un observable con los productos
  }
}
