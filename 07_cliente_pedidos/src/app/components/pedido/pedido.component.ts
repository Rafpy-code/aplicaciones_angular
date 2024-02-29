import { Component, OnInit } from '@angular/core';
import { Producto } from '../../model/Producto';
import { Pedido } from '../../model/Pedido';
import { ProductosService } from '../../service/productos.service';
import { PedidosService } from '../../service/pedidos.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.css',
})
export class PedidoComponent implements OnInit {
  pedido: Pedido;
  productos: Producto[] = [];
  pedidos: Pedido[] = [];

  constructor(
    private productosService: ProductosService,
    private pedidosService: PedidosService
  ) {}

  //Se ejecuta una vez que el componente está listo para su utilización
  ngOnInit(): void {
    this.verProductos();
    this.pedido = new Pedido();
  }

  verProductos(): void {
    this.productosService
      .cargarProductos() //Devuelve un Observable<Resultado[]> al cual nos subscribimos
      .subscribe((data) => (this.productos = data)); //Llamada asíncrona, se ejecuta cuando el resultado esté disponible
  }

  guardarPedido(): void {
    this.pedidos = [];
    this.pedidosService
      .alta(this.pedido)
      .subscribe(() => this.verProductos()); // No devuelve nada
  }

  verPedidos(): void {
    this.pedidosService
      .cargarPedidos()
      .subscribe((data) => (this.pedidos = data));
  }
}
