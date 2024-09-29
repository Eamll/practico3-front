import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Venta } from '../models/venta.model';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  // Replace with your actual API endpoint
  private apiUrl = 'https://';
  private ventas: Venta[] = [
    {
      id: 1,
      cliente_id: 101,
      metodo_pago: 'Tarjeta de Crédito',
      items: [
        { producto_id: 1, cantidad: 2, precio_unitario: 100, total: 200 },
        { producto_id: 2, cantidad: 1, precio_unitario: 200, total: 200 }
      ],
      total: 400
    },
    {
      id: 2,
      cliente_id: 102,
      metodo_pago: 'Efectivo',
      items: [
        { producto_id: 1, cantidad: 1, precio_unitario: 100, total: 100 },
        { producto_id: 3, cantidad: 3, precio_unitario: 300, total: 900 }
      ],
      total: 1000
    }
  ];

  constructor(private http: HttpClient) { }

  // Fetch ventas from the API
  getVentas(): Venta[] {
    return this.ventas;
    // return this.http.get<Venta[]>(this.apiUrl);
  }

  // Add a new venta
  addVenta(venta: Venta): void {
    this.ventas.push(venta);
    // return this.http.post<Venta>(this.apiUrl, venta);
  }

  // Delete a venta by id
  deleteVenta(ventaId: number): void {
    this.ventas = this.ventas.filter(venta => venta.id !== ventaId);
    // return this.http.delete(`${this.apiUrl}/${ventaId}`);
  }
}
