import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Venta } from '../models/venta.model';
import { environment } from '../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  // Replace with your actual API endpoint
  private apiUrl = environment.apiUrl + '/ventas';

  constructor(private http: HttpClient) { }

  // Fetch ventas from the API
  getVentas(): Observable<Venta[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<{ total: number, data: Venta[] }>(this.apiUrl, { headers })
      .pipe(
        map((response: { data: any; }) => response.data)
      );
  }

  // Add a new venta
  addVenta(venta: Venta): Observable<Venta> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Venta>(this.apiUrl, venta, { headers });
  }
}
