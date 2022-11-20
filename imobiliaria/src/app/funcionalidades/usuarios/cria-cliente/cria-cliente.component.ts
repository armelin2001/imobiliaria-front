import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cria-cliente',
  templateUrl: './cria-cliente.component.html',
  styleUrls: ['./cria-cliente.component.scss']
})
export class CriaClienteComponent implements OnInit {

  formularioCliente: FormGroup;
  cpfRegex: RegExp = /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/
  emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  constructor(private formBuilder: FormBuilder) { 
    this.formularioCliente = this.formBuilder.group({
      senha: ['', Validators.required],
      email: ['', Validators.required, Validators.pattern(this.emailregex)],
      cpf: ['', [Validators.required, Validators.pattern(this.cpfRegex)]],
      nome: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

}
