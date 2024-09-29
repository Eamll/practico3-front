import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Cliente } from '../../models/cliente.model';
import { Producto } from '../../models/producto.model';
@Component({
  selector: 'app-registro-venta',
  templateUrl: './registro-venta.component.html',
  providers: [MessageService]
})
export class RegistroVentaComponent implements OnInit {
  ventaForm!: FormGroup;
  clientes: Cliente[] = [
    {
      ci_nit: '12345678',
      nombre: 'Juan Perez',
      email: 'juan@gmail.com',
      id: 1
    }
  ];
  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Juan Perez',
      precio: 10,
      stock: 10
    }
  ];
  metodosPago: any[] = [
    { label: 'Efectivo', value: 'Efectivo' },
    { label: 'Tarjeta', value: 'Tarjeta' }
  ];
  messages: any[] = [];

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    // Inject your services here
  ) { }

  ngOnInit() {
    this.initForm();
    this.loadClientes();
    this.loadProductos();
  }

  initForm() {
    this.ventaForm = this.fb.group({
      cliente_id: ['', Validators.required],
      metodo_pago: ['', Validators.required],
      items: this.fb.array([])
    });
    this.addItem();
  }

  get itemsFormArray() {
    return this.ventaForm.get('items') as FormArray;
  }

  addItem() {
    const item = this.fb.group({
      producto_id: ['', Validators.required],
      cantidad: [1, [Validators.required, Validators.min(1)]],
      precio_unitario: ['', [Validators.required, Validators.min(0)]]
    });
    this.itemsFormArray.push(item);
  }

  removeItem(index: number) {
    this.itemsFormArray.removeAt(index);
  }

  loadClientes() {
    // Implement API call to get clients
  }

  loadProductos() {
    // Implement API call to get products
  }

  getSelectedClienteName() {
    // Implement logic to get selected client name
  }

  calcularTotal(): number {
    return this.itemsFormArray.controls.reduce((total, item) => {
      const cantidad = item.get('cantidad')?.value || 0;
      const precioUnitario = item.get('precio_unitario')?.value || 0;
      return total + (cantidad * precioUnitario);
    }, 0);
  }

  onSubmit() {
    if (this.ventaForm.valid) {
      // Implement API call to submit form
      this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Venta registrada correctamente' });
      this.ventaForm.reset();
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Por favor, complete todos los campos requeridos.' });
    }
  }
}
