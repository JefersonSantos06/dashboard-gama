import { NgModule } from '@angular/core';
import { EmpresasComponent } from './empresas.component';
import {NgxMaskModule} from "ngx-mask";
import {ReactiveFormsModule} from "@angular/forms";
import {EmpresasRoutingModule} from "./empresas-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {CurrencyMaskModule} from "ng2-currency-mask";
import {AppPipeModule} from "../../shared/pipe/app-pipe.module";
import {EmpresaCadastroComponent} from "./empresa-cadastro/empresa-cadastro.component";
import {EmpresaMenuComponent} from "./empresa-menu/empresa-menu.component";
import {EmpresasTableModule} from "../../shared/components/empresas-table/empresas-table.module";



@NgModule({
  declarations: [
    EmpresasComponent,
    EmpresaCadastroComponent,
    EmpresaMenuComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    EmpresasRoutingModule,
    CurrencyMaskModule,
    AppPipeModule,
    NgxMaskModule.forRoot(),
    EmpresasTableModule
  ]
})
export class EmpresasModule { }
