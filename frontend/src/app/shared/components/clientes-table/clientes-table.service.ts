import { Injectable } from '@angular/core';
import { environment as env} from "../../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Cliente} from "../../models/cliente";
import {map, Observable, Subject} from "rxjs";
declare var $ :any;

@Injectable({
  providedIn: 'root'
})
export class ClientesTableService {

  url: string = env.urlApi + '/cliente'

  constructor(private http: HttpClient) { }

  getAllClientes(pageNumber?: number): Observable<{ content: any; totalElements: any }> {
    const params = new HttpParams()
      .set("page", 0)
      .set("size", 999)

    return this.http.get<Cliente[]>(this.url, {params}).pipe(
      map(
        (res:any) => {
          return {"content" : res.content, "totalElements":res.totalElements};
        }));
  }
}

