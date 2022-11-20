import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-imovel',
  templateUrl: './criar-imovel.component.html',
  styleUrls: ['./criar-imovel.component.scss']
})
export class CriarImovelComponent implements OnInit {
  formularioImovel: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.formularioImovel = this.formBuilder.group({
      estado: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      bairro: ['', [Validators.required]],
      rua: ['', [Validators.required]],
      cep: ['', [Validators.required]],
      complemento: [''],
      valorBase: ['', [Validators.required]],
      valorNegociado: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  submitForm(){}

}
