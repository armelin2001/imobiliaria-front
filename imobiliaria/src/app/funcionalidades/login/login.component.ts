import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginDto, LoginRetornoDto } from 'src/app/models/login-dto';
import { MenuSuperiorComponent } from 'src/app/shared/componentes/menu-superior/menu-superior.component';
import { LoginService } from 'src/app/shared/http-service/login-service/login.service';
import { LocalstorageService } from 'src/app/shared/localstorage/localstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formularioLogin: FormGroup;
  
  constructor(private formBuilder: FormBuilder, 
    private router: Router, 
    private loginService: LoginService,
    private localstorageService:LocalstorageService,
    public dialog: MatDialog,
    ) {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.formularioLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(emailregex)]],
      senha: ['', [Validators.required]]
    })
  }

  ngOnInit(): void { 
  }

  submitForm(){
    if(this.formularioLogin.valid){
      const login = this.getLogin();
      this.loginService.realizaLogin(login).subscribe(
        (res)=>{
          console.log(res);
          console.log("Login feito");
          const loginRetorno: LoginRetornoDto = {
            id: res.id,
            email: res.email,
            ehCorretor: res.ehCorretor
          }
          this.localstorageService.adicionar("usuario",loginRetorno);
          if(loginRetorno.ehCorretor){
            this.router.navigate(['/']);
          }
          this.router.navigate(['/']);
        },
        (error)=>{
          console.log(error);
          console.log("Error no login");
          this.dialog.open(DialogElementsExampleDialog);
          //this.router.navigate(['/']);
        }
      );
    }
  }

  vaiParaCadastroCliente(){
    this.router.navigate(['/usuarios/cliente']);
  }
  
  vaiParaCadastroCorretor(){
    this.router.navigate(['/usuarios/corretor']);
  }

  getLogin(): LoginDto{
    const formularioLogin = this.formularioLogin.value;
    const realizaLogin: LoginDto = {
      email: formularioLogin.email,
      senha: formularioLogin.senha
    }
    return realizaLogin;
  }

}
@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {}

