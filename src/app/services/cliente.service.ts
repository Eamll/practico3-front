import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  // Replace with your actual API endpoint
  private apiUrl = 'https://';
  private clientes: Cliente[] = [
    { nombre: 'Juan Perez', ci_nit: '12345678', email: 'juan.perez@example.com', id: 1 },
    { nombre: 'Maria Lopez', ci_nit: '87654321', email: 'maria.lopez@example.com', id: 2 },
    { nombre: 'Carlos Garcia', ci_nit: '11223344', email: 'carlos.garcia@example.com', id: 3 }
  ];
  constructor(private http: HttpClient) { }

  // Fetch clients from the API
  getClients(): Cliente[] {
    return this.clientes;
    // return this.http.get<Cliente[]>(this.apiUrl);
  }
}
