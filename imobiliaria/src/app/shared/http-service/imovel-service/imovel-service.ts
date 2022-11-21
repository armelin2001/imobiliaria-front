import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlugaImovelDto, CriarImovelDto } from 'src/app/models/imovel-dto';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class ImovelService {
  urlbase = environment.host;

  constructor(private http: HttpClient) { }

  getListaImoveis(): Observable<any>{
    return this.http.get(`${this.urlbase}/imovel`);
  }
  
  getImovelPorId(id: string): Observable<any>{
    return this.http.get(`${this.urlbase}/imovel/${id}`);
  }

  criaImovel(imovelCriado: CriarImovelDto): Observable<any>{
    return this.http.post(`${this.urlbase}/imovel`, imovelCriado);
  }

  removeImovel(id: string): Observable<any>{
    return this.http.delete(`${this.urlbase}/imovel/${id}`);
  }

  alugaImovel(alugaImovelDto: AlugaImovelDto): Observable<any>{
    return this.http.patch(`${this.urlbase}/imovel/aluga`, alugaImovelDto);
  }
}
