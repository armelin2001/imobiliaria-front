import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CriaCorretorDto } from 'src/app/models/corretor-dto';
import { environment } from 'src/environments/environment';

@Injectable()
export class CorretorServiceService {
  urlbase = environment.host;

  constructor(private http: HttpClient) {}

  getListaCorretores(){
    return this.http.get(`${this.urlbase}/corretor`);
  }

  getCorretorPorId(id: string){
    return this.http.get(`${this.urlbase}/corretor/${id}`);
  }

  criaCorretor(corretorCriado: CriaCorretorDto){
    this.http.post(`${this.urlbase}/imovel`, corretorCriado);
  }

}
