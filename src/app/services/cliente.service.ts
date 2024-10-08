import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, map } from 'rxjs';
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'http://127.0.0.1:8000/api/clientes';  // Replace with the actual API endpoint

  constructor(private http: HttpClient) { }

  getClients(): Observable<Cliente[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<{ total: number, data: Cliente[] }>(this.apiUrl, { headers })
      .pipe(
        map((response: { data: any; }) => response.data)  // Extract the `data` property from the response
      );
  }

  addCliente(cliente: Cliente): Observable<Cliente> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Cliente>(this.apiUrl, cliente, { headers });
  }
}
