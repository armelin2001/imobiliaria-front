import { Injectable } from '@angular/core';
import { LoginRetornoDto } from 'src/app/models/login-dto';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  prefixo='front';
  constructor() { }

  adicionar<T>(key: string, value: T): void{
    if(!value || !key){
      return;
    }
    localStorage.setItem(`${this.prefixo}:${key}`, JSON.stringify(value));
  }

  obter<T>(key: string): T | void{
    const valorLocalStorage = localStorage.getItem(`${this.prefixo}:${key}`);
    if(valorLocalStorage===null|| valorLocalStorage===undefined){
      return;
    }
    return JSON.parse(valorLocalStorage);
  }

  obterUsuario<T>(key: string): LoginRetornoDto | void{
    const valorLocalStorage = localStorage.getItem(`${this.prefixo}:${key}`);
    if(valorLocalStorage===null|| valorLocalStorage===undefined){
      return;
    }
    const usuario: LoginRetornoDto = JSON.parse(valorLocalStorage);
    return usuario;
  }

  remover(key: string): void {
    localStorage.removeItem(`${this.prefixo}:${key}`);
  }

  limpar(): void{
    if(!localStorage.length){
      return
    }
    
    Object.keys(localStorage).forEach((item: string)=> {
      if(!item.startsWith(this.prefixo)){
        return;
      }
      localStorage.removeItem(item);
    });

  }

}
