import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Cliente } from '../../models/cliente.model';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrl: './registro-cliente.component.css'
})
export class RegistroClienteComponent {
  cliente: Cliente = {
    nombre: '',
    ci_nit: '',
    email: '',
    id: 0
  };
  constructor(private clienteService: ClienteService, private messageService: MessageService) { }

  ngOnInit() { }

  onSubmit() {
    console.log('Submitting', this.cliente);

    this.cliente.id = Date.now(); // Assuming that IDs are generated client-side manually. Replace with actual ID logic if necessary.
    this.clienteService.addCliente(this.cliente);

    this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Cliente registrado correctamente' });
    this.cliente = { nombre: '', ci_nit: '', email: '', id: 0 };
  }
}
