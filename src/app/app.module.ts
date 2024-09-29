import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { RegistroClienteComponent } from './components/registro-cliente/registro-cliente.component';
import { ListaVentasComponent } from './components/lista-ventas/lista-ventas.component';
import { RegistroVentaComponent } from './components/registro-venta/registro-venta.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaClientesComponent,
    RegistroClienteComponent,
    ListaVentasComponent,
    RegistroVentaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
