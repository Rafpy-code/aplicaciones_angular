import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { AltaComponent } from './components/alta/alta.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MenuComponent,
    CatalogoComponent,
    BuscarComponent,
    AltaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [MenuComponent]
})
export class AppModule { }
