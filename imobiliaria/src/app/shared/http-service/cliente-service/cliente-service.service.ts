import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class ClienteServiceService {

  urlbase = environment.host;

  constructor(private http: HttpClient) { }

  getClientePorId(id: string){
    return this.http.get(`${this.urlbase}/${id}`);
  }
  criaCliente(){}
}
