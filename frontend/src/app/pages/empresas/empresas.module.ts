import { NgModule } from '@angular/core';
import { EmpresasComponent } from './empresas.component';
import {NgxMaskModule} from "ngx-mask";
import {ReactiveFormsModule} from "@angular/forms";
import {EmpresasRoutingModule} from "./empresas-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {CurrencyMaskModule} from "ng2-currency-mask";



@NgModule({
  declarations: [
    EmpresasComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    EmpresasRoutingModule,
    CurrencyMaskModule,
    NgxMaskModule.forRoot()
  ]
})
export class EmpresasModule { }
