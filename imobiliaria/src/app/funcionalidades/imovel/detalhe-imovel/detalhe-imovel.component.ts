import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhe-imovel',
  templateUrl: './detalhe-imovel.component.html',
  styleUrls: ['./detalhe-imovel.component.scss']
})
export class DetalheImovelComponent implements OnInit {
  nomeRua = "Teste nome rua"
  tipoImovel = "Aprto";
  estado="Estado";
  cidade="Cidade";
  bairro = "Bairro";
  cep="800023";
  complemento="Complemento";


  valor=200;
  constructor() { }

  ngOnInit(): void {
  }

}
