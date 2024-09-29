import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente.model';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {
  clientes: Cliente[] = [];
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.fetchClients();
  }

  fetchClients(): void {
    console.log('Fetching clients...');
    this.clienteService.clientes$.subscribe(clients => {
      this.clientes = clients;
    });
    // this.clienteService.getClients().subscribe((data: Cliente[]) => {
    //   this.clientes = data;
    // });
  }
}
