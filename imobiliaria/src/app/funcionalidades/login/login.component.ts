import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formularioLogin: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.formularioLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(emailregex)]],
      senha: ['', [Validators.required]]
    })
  }

  ngOnInit(): void { 
  }

  submitForm(){}

  vaiParaCadastroCliente(){
    this.router.navigate(['/usuarios/cliente']);
  }
  vaiParaCadastroCorretor(){
    this.router.navigate(['/usuarios/corretor']);
  }
}
