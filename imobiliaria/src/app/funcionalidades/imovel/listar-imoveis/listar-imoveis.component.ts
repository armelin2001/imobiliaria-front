import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-imoveis',
  templateUrl: './listar-imoveis.component.html',
  styleUrls: ['./listar-imoveis.component.scss']
})
export class ListarImoveisComponent implements OnInit {

  imoveis: any[] = [
    {
      tipoImovel: 'Apartamento',
      nomeRua: 'Rua do teste',
      valor: 0,
      bairroEestado: 'Bairro, Curitiba'
    },
    {
      tipoImovel: 'Apartamento',
      nomeRua: 'Rua do teste',
      valor: 0,
      bairroEestado: 'Bairro, Curitiba'
    },
    {
      tipoImovel: 'Apartamento',
      nomeRua: 'Rua do teste',
      valor: 0,
      bairroEestado: 'Bairro, Curitiba'
    },
    {
      tipoImovel: 'Apartamento',
      nomeRua: 'Rua do teste',
      valor: 0,
      bairroEestado: 'Bairro, Curitiba'
    },
    {
      tipoImovel: 'Apartamento',
      nomeRua: 'Rua do teste',
      valor: 0,
      bairroEestado: 'Bairro, Curitiba'
    },
    
    {
      tipoImovel: 'Apartamento',
      nomeRua: 'Rua do teste',
      valor: 0,
      bairroEestado: 'Bairro, Curitiba'
    },
    
    {
      tipoImovel: 'Apartamento',
      nomeRua: 'Rua do teste',
      valor: 0,
      bairroEestado: 'Bairro, Curitiba'
    },
    
    {
      tipoImovel: 'Apartamento',
      nomeRua: 'Rua do teste',
      valor: 0,
      bairroEestado: 'Bairro, Curitiba'
    },
  ];
  
  ngOnInit(): void {
    for(let x=0; x < 35; x++){
      this.imoveis.push({
        tipoImovel: 'Apartamento',
        nomeRua: 'Rua do teste',
        valor: 0,
        bairroEestado: 'Bairro, Curitiba'
      });
    }
  }
}
