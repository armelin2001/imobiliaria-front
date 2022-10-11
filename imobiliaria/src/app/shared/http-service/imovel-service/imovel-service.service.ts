import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CriarImovelDto } from 'src/app/models/imovel-dto';
import { environment } from 'src/environments/environment';

@Injectable()
export class ImovelServiceService {
  urlbase = environment.host;

  constructor(private http: HttpClient) { }

  getListaImoveis(){
    return this.http.get(`${this.urlbase}/imovel`);
  }
  
  getImovelPorId(id: string){
    return this.http.get(`${this.urlbase}/imovel/${id}`);
  }

  criaImovel(imovelCriado: CriarImovelDto){
    this.http.post(`${this.urlbase}/imovel`, imovelCriado);
  }

  removeImovel(id: string){
    this.http.delete(`${this.urlbase}/imovel/${id}`);
  }
}
