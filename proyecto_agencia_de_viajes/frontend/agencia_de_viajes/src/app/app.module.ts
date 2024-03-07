import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReservasComponent } from './components/reservas/reservas.component';
import { MisReservasComponent } from './components/mis-reservas/mis-reservas.component';
import { AccesoComponent } from './components/acceso/acceso.component';
import { AccesoRegistroComponent } from './components/acceso-registro/acceso-registro.component';

@NgModule({
  declarations: [
    MenuComponent,
    ReservasComponent,
    MisReservasComponent,
    AccesoComponent,
    AccesoRegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [MenuComponent]
})
export class AppModule { }
