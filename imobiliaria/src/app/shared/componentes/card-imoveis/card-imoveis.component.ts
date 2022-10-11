import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-imoveis',
  templateUrl: './card-imoveis.component.html',
  styleUrls: ['./card-imoveis.component.scss']
})
export class CardImoveisComponent implements OnInit {
  
  @Input()
  tipoImovel: string = '';

  @Input()
  nomeRua: string = '';

  @Input()
  valor: number = 0;

  @Input()
  bairroEestado: string = '';

  teste = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque minima veniam, '
  constructor() { }

  ngOnInit(): void {
  }

}
