import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { LoginDto } from 'src/app/models/login-dto';

@Injectable()
export class LoginService {
  urlbase = environment.host;

  constructor(private http: HttpClient) { }

  realizaLogin(loginDto: LoginDto): Observable<any>{
    return this.http.post(`${this.urlbase}/login`, loginDto);
  }
}
