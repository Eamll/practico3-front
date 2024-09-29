export interface VentaItem {
  producto_id: number;
  cantidad: number;
  precio_unitario: number;
  total: number;
}

export interface Venta {
  id: number;
  cliente_id: number;
  metodo_pago: string;
  items: VentaItem[];
  total: number;
}
