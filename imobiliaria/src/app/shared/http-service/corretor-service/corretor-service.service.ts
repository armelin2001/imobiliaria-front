import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CriaCorretorDto } from 'src/app/models/corretor-dto';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class CorretorServiceService {
  urlbase = environment.host;

  constructor(private http: HttpClient) {}

  getListaCorretores(): Observable<any>{
    return this.http.get(`${this.urlbase}/corretor`);
  }

  getCorretorPorId(id: string): Observable<any>{
    return this.http.get(`${this.urlbase}/corretor/${id}`);
  }

  criaCorretor(corretorCriado: CriaCorretorDto): Observable<any>{
    return this.http.post(`${this.urlbase}/corretor`, corretorCriado);
  }

}
