import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CriaClienteDto } from 'src/app/models/cliente-dto';
import { environment } from 'src/environments/environment';

@Injectable()
export class ClienteServiceService {

  urlbase = environment.host;

  constructor(private http: HttpClient) { }

  getClientePorId(id: string): Observable<any>{
    return this.http.get(`${this.urlbase}/cliente/${id}`);
  }

  criaCliente(clienteCriado: CriaClienteDto): Observable<any>{
    return this.http.post(`${this.urlbase}/cliente`, clienteCriado);
  }

}
