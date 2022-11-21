import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CriaCorretorDto } from 'src/app/models/corretor-dto';
import { CorretorServiceService } from 'src/app/shared/http-service/corretor-service/corretor-service.service';

@Component({
  selector: 'app-cria-corretor',
  templateUrl: './cria-corretor.component.html',
  styleUrls: ['./cria-corretor.component.scss']
})
export class CriaCorretorComponent implements OnInit {

  formularioCorretor: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private corretorServiceService: CorretorServiceService,
    private router: Router) { 
    this.formularioCorretor = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      codigo: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  submitForm(){
    if(this.formularioCorretor.valid){
      const corretorCriado = this.getCorretor();
      this.corretorServiceService.criaCorretor(corretorCriado).subscribe(
        (res)=>{
          console.log(res);
          console.log("Create feito");
          this.router.navigate(['/']);
        },
        (error)=>{
          console.log(error);
          console.log("erro na criação");
          this.router.navigate(['/']);
        }
      );
    }
  }
  getCorretor(): CriaCorretorDto{
    const formularioValoresCorretor = this.formularioCorretor.value;
    console.log(formularioValoresCorretor);
    const criaCorretor: CriaCorretorDto = {
      email: formularioValoresCorretor.email,
      senha: formularioValoresCorretor.senha,
      nome: formularioValoresCorretor.nome,
    }
    return criaCorretor;
  }
}
