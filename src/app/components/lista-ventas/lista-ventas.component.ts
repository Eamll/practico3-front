import { Component, OnInit } from '@angular/core';
import { Venta } from '../../models/venta.model';
import { VentaService } from '../../services/venta.service';

@Component({
  selector: 'app-lista-ventas',
  templateUrl: './lista-ventas.component.html',
  styleUrls: ['./lista-ventas.component.scss']
})
export class ListaVentasComponent implements OnInit {

  ventas: Venta[] = [];

  constructor(private ventaService: VentaService) { }

  ngOnInit(): void {
    this.fetchVentas();
  }

  fetchVentas(): void {
    this.ventas = this.ventaService.getVentas();
  }
}
