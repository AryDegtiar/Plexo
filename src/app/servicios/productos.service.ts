import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class ProductosService {
  url = 'http://localhost:8081/productos';

  constructor(private http: HttpClient) {
  }

  getProductos() {
    return this.http.get(this.url);
  }
}
