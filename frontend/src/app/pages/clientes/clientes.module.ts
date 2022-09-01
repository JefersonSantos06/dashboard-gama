import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes.component';
import {ClientesRoutingModule} from "./clientes-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxMaskModule} from "ngx-mask";
import { ClientesMenuComponent } from './clientes-menu/clientes-menu.component';
import { ClientesCadastroComponent } from './clientes-cadastro/clientes-cadastro.component';
import {ClientesTableModule} from "../../shared/components/clientes-table/clientes-table.module";



@NgModule({
  declarations: [
    ClientesComponent,
    ClientesMenuComponent,
    ClientesCadastroComponent
  ],
  imports: [
    ClientesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    ClientesTableModule
  ]
})
export class ClientesModule { }
