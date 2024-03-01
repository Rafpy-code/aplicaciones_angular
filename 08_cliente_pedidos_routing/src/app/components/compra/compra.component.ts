import { Component } from '@angular/core';
import { Pedido } from '../../model/Pedido';
import { Producto } from '../../model/Producto';
import { ProductosService } from '../../service/productos.service';
import { PedidosService } from '../../service/pedidos.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrl: './compra.component.css',
})
export class CompraComponent {
  pedido: Pedido;
  productos: Producto[] = [];

  constructor(
    private productosService: ProductosService,
    private pedidosService: PedidosService
  ) {}

  //Se ejecuta una vez que el componente está listo para su utilización
  ngOnInit(): void {
    this.pedido = new Pedido();
    this.verProductos();
  }

  verProductos(): void {
    this.productosService
      .cargarProductos() //Devuelve un Observable<Resultado[]> al cual nos subscribimos
      .subscribe((data) => (this.productos = data)); //Llamada asíncrona, se ejecuta cuando el resultado esté disponible
  }

  guardarPedido(): void {
    this.pedidosService.alta(this.pedido).subscribe(() => this.verProductos()); // No devuelve nada
  }
}
