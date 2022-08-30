import {Component, OnDestroy, OnInit} from '@angular/core';
import {Cliente} from "../../models/cliente";
import { Subject } from 'rxjs';
import {ClientesTableService} from "./clientes-table.service";
declare var $ :any;


@Component({
  selector: 'app-clientes-table',
  templateUrl: './clientes-table.component.html',
  styleUrls: ['./clientes-table.component.scss']
})
export class ClientesTableComponent implements OnDestroy, OnInit {

  data: Cliente[] = [];
  dtOptions: DataTables.Settings = {
    pagingType: 'full_numbers',
    pageLength: 5,
    processing: true,
    lengthMenu: [5, 10, 20]
  };
  dtTrigger: Subject<any> = new Subject<any>();


  constructor(private service: ClientesTableService) { }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this.service.getAllClientes().subscribe((response: any) => {
      this.data = response.content;
      setTimeout(()=>{
        $('#dataTables-cliente').DataTable(this.dtOptions);
      }, 1);
    }, error => console.error(error));
  }

/*  pageChangeEvent(event: number){
    this.page = event;
    this.getAll();
  }*/

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
