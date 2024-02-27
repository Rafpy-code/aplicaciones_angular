import { Component } from '@angular/core';
import { Pedido } from '../../model/Pedido';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css',
})
export class PedidosComponent {
  pedidos: Pedido[] = [];
  pedido: Pedido;
  mostrar: boolean = false;

  constructor(){
    this.pedido = new Pedido();
  }

  grabarPedido() {
    this.pedidos.push(this.pedido);
    this.pedido = new Pedido();
    this.mostrar = false;
  }

  verPedidos() {
    this.mostrar = true;
  }
  ocultarPedidos() {
    this.mostrar = false;
  }
}
