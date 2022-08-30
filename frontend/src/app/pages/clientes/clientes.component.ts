import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ClientesService} from "./clientes.service";
import {HttpClient} from "@angular/common/http";
import Swal from "sweetalert2";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clienteFormGroup = this.formBuilder.group({
    nome: ['', Validators.required],
    cpf: ['', Validators.required],
    rua: ['', Validators.required],
    numero: ['', Validators.required],
    cep: ['', Validators.required],
    estado: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder, private service: ClientesService) { }

  ngOnInit(): void {

  }

  createCliente(){
    this.service.createCliente(this.clienteFormGroup).subscribe((response: any) => {
      Swal.fire('Cliente cadastrado!','', 'success').then();
      this.clienteFormGroup.reset();
    }, error => {
      Swal.fire('Cliente não cadastrado!', error.message() , 'error').then();
    });
  }




}
