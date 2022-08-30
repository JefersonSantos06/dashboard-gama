import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes.component';
import {ClientesRoutingModule} from "./clientes-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxMaskModule} from "ngx-mask";



@NgModule({
  declarations: [
    ClientesComponent
  ],
  imports: [
    ClientesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ]
})
export class ClientesModule { }
