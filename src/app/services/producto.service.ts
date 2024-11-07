import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Producto } from '../models/producto.model';
import { environment } from '../environments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl = environment.apiUrl + '/productos';

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
