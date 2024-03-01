import { Component } from '@angular/core';
import { Pedido } from '../../model/Pedido';
import { PedidosService } from '../../service/pedidos.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.css',
})
export class PedidoComponent {
  pedidos: Pedido[] = [];

  constructor(private pedidosService: PedidosService) {}

  ngOnInit(): void {
    this.verPedidos();
  }

  verPedidos(): void {
    this.pedidosService
      .cargarPedidos()
      .subscribe((data) => (this.pedidos = data));
  }
}
