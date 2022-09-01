import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment as env} from "../../../environments/environment";
import {FormGroup} from "@angular/forms";
import { Observable} from "rxjs";
import { map, tap } from 'rxjs/operators';
import {Cliente} from "../../shared/models/cliente";

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  url: string = env.urlApi + '/cliente'

  constructor(private http: HttpClient) { }

  createCliente(cliente: FormGroup): Observable<any>{
    return this.http.post<Cliente>(this.url, cliente.value).pipe(
      map((data: any) => {
          return data;
        }));
  }

  alteraCliente(cliente: FormGroup, id: any): Observable<any>{
    return this.http.put<Cliente>(this.url + "/" + id , cliente.value).pipe(
      map((data: any) => {
          return data;
        }));
  }

  excluirCliente(id: any){
    return this.http.delete<Cliente>(this.url + "/" + id).pipe(
      map((data: any) => {
        return data;
      }));
  }
}
