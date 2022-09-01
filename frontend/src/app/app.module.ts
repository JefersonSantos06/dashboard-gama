import {DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LayoutModule } from "./layout/layout.module";
import {SharedModule} from "./shared/shared.module";
import {DashboardModule} from "./pages/dashboard/dashboard.module";
import {ClientesModule} from "./pages/clientes/clientes.module";
import {EmpresasModule} from "./pages/empresas/empresas.module";
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from "@angular/common";
import {MaskPipe, NgxMaskModule} from "ngx-mask";

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    FontAwesomeModule,
    LayoutModule,
    SharedModule,
    DashboardModule,
    ClientesModule,
    EmpresasModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
