import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'https://your-api-url/clients';  // Replace with the actual API endpoint
  private clientes: Cliente[] = [
    { nombre: 'Juan Perez', ci_nit: '12345678', email: 'juan.perez@example.com', id: 1 },
    { nombre: 'Maria Lopez', ci_nit: '87654321', email: 'maria.lopez@example.com', id: 2 },
    { nombre: 'Carlos Garcia', ci_nit: '11223344', email: 'carlos.garcia@example.com', id: 3 }
  ];

  private clientesSubject = new BehaviorSubject<Cliente[]>(this.clientes);
  clientes$ = this.clientesSubject.asObservable();

  constructor(private http: HttpClient) { }

  getClients(): Observable<Cliente[]> {
    return this.clientes$;
  }

  addCliente(cliente: Cliente) {
    this.clientes.push(cliente);
    this.clientesSubject.next(this.clientes);
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // return this.http.post<Cliente>(this.apiUrl, cliente, { headers });
  }
}
