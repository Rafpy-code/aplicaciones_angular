import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FichaComponent } from './ficha/ficha.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FichaComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [FichaComponent]
})
export class AppModule { }
