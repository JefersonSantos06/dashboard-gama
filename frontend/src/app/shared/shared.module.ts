import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HttpClientModule} from "@angular/common/http";
import {NgxMaskModule} from "ngx-mask";

@NgModule({
  declarations: [
  ],
  exports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    NgbModule,
  ]
})
export class SharedModule { }
