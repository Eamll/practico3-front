import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  // Replace with your actual API endpoint
  private apiUrl = 'http://127.0.0.1:8000/api/productos';
  // private productos: Producto[] = [
  //   { nombre: 'Producto 1', precio: 100, stock: 10, id: 1 },
  //   { nombre: 'Producto 2', precio: 200, stock: 20, id: 2 },
  //   { nombre: 'Producto 3', precio: 300, stock: 5, id: 3 }
  // ];

  constructor(private http: HttpClient) { }

  // Fetch products from the API
  getProductos(): Observable<Producto[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<{ total: number, data: Producto[] }>(this.apiUrl, { headers })
      .pipe(
        map((response: { data: any; }) => response.data)  // Extract the `data` property from the response
      );
  }
}
