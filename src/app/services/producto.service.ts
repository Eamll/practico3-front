import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  // Replace with your actual API endpoint
  private apiUrl = 'https://';
  private productos: Producto[] = [
    { nombre: 'Producto 1', precio: 100, stock: 10, id: 1 },
    { nombre: 'Producto 2', precio: 200, stock: 20, id: 2 },
    { nombre: 'Producto 3', precio: 300, stock: 5, id: 3 }
  ];

  constructor(private http: HttpClient) { }

  // Fetch products from the API
  getProductos(): Producto[] {
    return this.productos;
    // return this.http.get<Producto[]>(this.apiUrl);
  }
}
