import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cria-corretor',
  templateUrl: './cria-corretor.component.html',
  styleUrls: ['./cria-corretor.component.scss']
})
export class CriaCorretorComponent implements OnInit {

  formularioCorretor: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.formularioCorretor = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      codigo: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

}
