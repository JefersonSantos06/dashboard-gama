import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {MaskPipe} from "ngx-mask";
import {DatatablesLang} from "../../models/datatablesLang";
import {EmpresasTableService} from "./empresas-table.service";
import {ClientesTableService} from "../clientes-table/clientes-table.service";
import {Router} from "@angular/router";
import {Validators} from "@angular/forms";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-empresas-table',
  templateUrl: './empresas-table.component.html',
  styleUrls: ['./empresas-table.component.scss']
})
export class EmpresasTableComponent implements OnDestroy, OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();


  constructor(private service: EmpresasTableService, private mask: MaskPipe, private router: Router,
              private curency: CurrencyPipe) {  }

  empresaColumns = [
    {title: 'ID',  data: 'id'},
    {title: 'nome', data: 'remetente'},
    {title: 'CPF', data: 'cnpj', ngPipeInstance: this.mask, ngPipeArgs: ['CPF_CNPJ']},
    {title: 'Rua', data: 'rua'},
    {title: 'Numero', data: 'numero'},
    {title: 'CEP', data: 'cidade' },
    {title: 'Estado', data: 'estado'},
    {title: 'Frete', data: 'valorFrete', ngPipeInstance: this.curency}
  ]


  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu: [5, 10, 15, 25, 50],
      serverSide: true,
      processing: true,
      ordering: false,
      searching: true,
      responsive: true,
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        $('td', row).off('click');
        $('td', row).on('click', () => {
          this.router.navigate(['/empresas/cadastro', {empresa: JSON.stringify(data)}]);
        });
        return row;
      },
      language: DatatablesLang.ptbrDatatables,
      ajax: (dataTablesParameters: any, callback: any) => {
        this.service.getAllForTable(dataTablesParameters.start, dataTablesParameters.length, dataTablesParameters.search.value).subscribe(
          (resp: any) => {
            callback({
              recordsTotal: resp.totalElements,
              recordsFiltered: resp.totalElements,
              data: resp.content
            });
          }
        )
      },
      columns: this.empresaColumns
    };
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
