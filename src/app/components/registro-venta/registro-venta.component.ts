import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Cliente } from '../../models/cliente.model';
import { Producto } from '../../models/producto.model';
import { Venta, VentaItem } from '../../models/venta.model';
import { ClienteService } from '../../services/cliente.service';
import { ProductoService } from '../../services/producto.service';
import { VentaService } from '../../services/venta.service';

@Component({
  selector: 'app-registro-venta',
  templateUrl: './registro-venta.component.html',
  providers: [MessageService]
})
export class RegistroVentaComponent implements OnInit {

  ventaForm!: FormGroup;
  clientes: Cliente[] = [];
  productos: Producto[] = [];
  metodosPago: any[] = [
    { label: 'Efectivo', value: 'Efectivo' },
    { label: 'Tarjeta', value: 'Tarjeta' }
  ];
  messages: any[] = [];

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private clienteService: ClienteService,
    private productoService: ProductoService,
    private ventaService: VentaService  // Inject VentaService
  ) { }

  ngOnInit() {
    this.initForm();
    this.fetchClients();
    this.fetchProductos();
  }

  fetchClients(): void {
    console.log('Fetching clients...');
    this.clienteService.getClients().subscribe((data: Cliente[]) => {
      this.clientes = data;
    });
  }

  fetchProductos(): void {
    console.log('Fetching products...');
    this.productoService.getProductos().subscribe((data: Producto[]) => {
      this.productos = data;
    });
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

  getSelectedClienteName() {
    const clienteId = this.ventaForm.get('cliente_id')?.value;
    const selectedCliente = this.clientes.find(cliente => cliente.id === clienteId);
    return selectedCliente ? selectedCliente.nombre : '';
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
      const newVenta: Venta = {
        id: this.ventaService.getVentas().length + 1,  // Generate new ID
        cliente_id: this.ventaForm.get('cliente_id')?.value,
        metodo_pago: this.ventaForm.get('metodo_pago')?.value,
        items: this.itemsFormArray.value.map((item: any) => ({
          producto_id: item.producto_id,
          cantidad: item.cantidad,
          precio_unitario: item.precio_unitario,
          total: item.cantidad * item.precio_unitario
        })),
        total: this.calcularTotal()
      };
      this.ventaService.addVenta(newVenta);  // Add newVenta using VentaService
      this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Venta registrada correctamente' });
      this.ventaForm.reset();
      this.itemsFormArray.clear();
      this.addItem();  // Add default item line
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Por favor, complete todos los campos requeridos.' });
    }
  }
}
