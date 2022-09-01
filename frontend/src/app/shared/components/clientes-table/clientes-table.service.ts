import {Injectable} from '@angular/core';
import {environment as env} from "../../../../environments/environment";
import {HttpClient, HttpResponse, HttpParams} from "@angular/common/http";
import {Cliente} from "../../models/cliente";
import {map, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientesTableService {
  url: string = env.urlApi + '/cliente'

  constructor(private http: HttpClient) {
  }

  getAllForTable(start: number, lenght: number, search: string): Observable<any> {
    const params = new HttpParams()
      .set("page", (start / lenght))
      .set("size", lenght)
      .set("search", search)

    return this.http.get<any>( this.url, {params}).pipe(
      map((resp: any) => {
        return resp
      }
    ));
  }
}

