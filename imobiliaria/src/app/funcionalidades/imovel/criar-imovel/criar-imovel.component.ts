import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CriarImovelDto } from 'src/app/models/imovel-dto';
import { tipoImovel } from 'src/app/shared/enums/tipoImove-enum';
import { ImovelService } from 'src/app/shared/http-service/imovel-service/imovel-service';


@Component({
  selector: 'app-criar-imovel',
  templateUrl: './criar-imovel.component.html',
  styleUrls: ['./criar-imovel.component.scss']
})
export class CriarImovelComponent implements OnInit {
  formularioImovel: FormGroup;

  constructor(private formBuilder: FormBuilder, 
    private imovelService: ImovelService,
    private router: Router,) { 
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

  submitForm(){
    if(this.formularioImovel.valid){
      const imovelCriado = this.getImovel();
      this.imovelService.criaImovel(imovelCriado).subscribe(
        (res)=>{
          console.log(res);
          console.log("Fez o create");
          this.router.navigate(['/']);
        },
        (error)=>{
          console.log(error);
          console.log("Falhou criação");
          this.router.navigate(['/']);
        }
      )
    }
  }
  getImovel(): CriarImovelDto{
    const formularioValores = this.formularioImovel.value;
    const criaImovel: CriarImovelDto = {
      tipoImoveis: tipoImovel.APARTAMENTO,
      corretorAnunciadoId: "630ff9f6e1e4834eae77a79f",
      estado: formularioValores.estado,
      bairro: formularioValores.bairro,
      rua: formularioValores.rua,
      cep: formularioValores.cep,
      cidade: formularioValores.cidade,
      complemento: formularioValores.complemento||"",
      valorNegociado: formularioValores.valorNegociado,
      criacao: new Date(),
    };
    return criaImovel;
  }
}
