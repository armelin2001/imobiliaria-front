import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { LoginRetornoDto } from 'src/app/models/login-dto';
import { LocalstorageService } from '../../localstorage/localstorage.service';

@Component({
  selector: 'app-menu-superior',
  templateUrl: './menu-superior.component.html',
  styleUrls: ['./menu-superior.component.scss']
})
export class MenuSuperiorComponent implements OnInit {

  mostraCadastroImovel = false;
  mostraLogin = true;
  mostraLogOut = false;

  constructor(private router: Router, private localStorage: LocalstorageService) { }

  ngOnInit(): void {
    this.router.events.subscribe(()=>{
      const usuario = this.localStorage.obterUsuario("usuario");
      if(usuario===null||usuario===undefined){
        this.mostraCadastroImovel = false;
      }
      if(usuario){
        this.mostraLogin = false;
        this.mostraLogOut = true;
        if(usuario.ehCorretor){
          this.mostraCadastroImovel = true; 
        }
      }
    })
  }

  voltaHome(){
    this.router.navigate(['/']);
  }

  vaiParaCadastroImovel(){
    this.router.navigate(['/criarimovel']);
  }

  vaiParaLogin(){
    this.router.navigate(['/login']);
  }

  fazerLogOut(){
    this.mostraCadastroImovel = false;
    this.mostraLogin = true;
    this.mostraLogOut = false;
    this.localStorage.remover("usuario");
  }
}
