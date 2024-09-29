import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { RegistroClienteComponent } from './components/registro-cliente/registro-cliente.component';
import { ListaVentasComponent } from './components/lista-ventas/lista-ventas.component';
import { RegistroVentaComponent } from './components/registro-venta/registro-venta.component';
import { HomeComponent } from './pages/home/home.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { MessagesModule } from 'primeng/messages';
import { TableModule } from 'primeng/table';
import { provideHttpClient } from '@angular/common/http';
import { MessageModule } from 'primeng/message';


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
    BrowserAnimationsModule,
    AppRoutingModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    FormsModule,
    DropdownModule,
    ReactiveFormsModule,
    InputNumberModule,
    MessagesModule,
    MessageModule,
    TableModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-BO' }, MessageService, provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
