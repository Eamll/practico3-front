import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Cliente } from '../../models/cliente.model';

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
  constructor(private messageService: MessageService) { }

  ngOnInit() { }

  onSubmit() {
    console.log('Submitting', this.cliente);

    setTimeout(() => {
      this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Cliente registrado correctamente' });
      this.cliente = {
        nombre: '', ci_nit: '', email: '', id: 0
      };
    }, 1000);

    // Error handling would look something like this:
    // if (error.status === 400) {
    //   Object.keys(error.error.errors).forEach(key => {
    //     this.messageService.add({severity:'error', summary: 'Error', detail: error.error.errors[key]});
    //   });
    // }
  }
}
