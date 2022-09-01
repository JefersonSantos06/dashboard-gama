import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ClientesService} from "../clientes.service";
import Swal from "sweetalert2";
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Cliente} from "../../../shared/models/cliente";


@Component({
  selector: 'app-clientes-cadastro',
  templateUrl: './clientes-cadastro.component.html',
  styleUrls: ['./clientes-cadastro.component.scss']
})
export class ClientesCadastroComponent implements OnInit {
  obj: Cliente = new Cliente();

  clienteFormGroup = this.formBuilder.group({
    nome: ['', Validators.required],
    cpf: ['', Validators.required],
    rua: ['', Validators.required],
    numero: ['', Validators.required],
    cep: ['', Validators.required],
    estado: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder, private service: ClientesService,  private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.obj = JSON.parse(<string>this.route.snapshot.paramMap.get('cliente'))
    if (this.obj){
      this.acessandoCliente();
    }
  }

  createCliente(){
    this.service.createCliente(this.clienteFormGroup).subscribe((response: any) => {
      Swal.fire('Cliente cadastrado!','', 'success').then();
      this.clienteFormGroup.reset();
    }, error => {
      Swal.fire('Cliente não cadastrado!', error.message() , 'error').then();
    });
  }

  acessandoCliente(){
    this.clienteFormGroup.controls.nome.setValue(this.obj.nome)
    this.clienteFormGroup.controls.cpf.setValue(this.obj.cpf)
    this.clienteFormGroup.controls.rua.setValue(this.obj.rua)
    this.clienteFormGroup.controls.numero.setValue(this.obj.numero)
    this.clienteFormGroup.controls.cep.setValue(this.obj.cep)
    this.clienteFormGroup.controls.estado.setValue(this.obj.estado)
  }

  alteraCliente(){
    this.service.alteraCliente(this.clienteFormGroup, this.obj.id).subscribe((response: any) => {
      Swal.fire('Cliente Alterado!','', 'success').then();
    }, error => {
      Swal.fire('Nao foi possivel alterar!', error.error, 'error').then();
    });
  }

  excluirCliente(){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success ml-2',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Voce tem certeza?',
      text: "Você não poderá reverter isso!",
      icon: 'warning',
      allowOutsideClick: false,
      showCancelButton: true,
      confirmButtonText: 'Sim, Excluir!',
      cancelButtonText: 'Nao, voltar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        this.service.excluirCliente(this.obj.id).subscribe((response: any) => {
          Swal.fire('Cliente Excluido!','', 'success').then((result) => {
            if (result.isConfirmed){
              this.router.navigate(['/clientes'])
            }
          });
        }, (error: any) => {
          Swal.fire('Nao foi possivel Excluir!', error.error.message, 'error').then();
        });


      }
    })
  }

}
