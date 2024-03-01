import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PedidoComponent } from './components/pedido/pedido.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CompraComponent } from './components/compra/compra.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    CompraComponent,
    MenuComponent,
    PedidoComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [MenuComponent]
})
export class AppModule { }
