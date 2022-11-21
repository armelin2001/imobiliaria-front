import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  @Input()
  idImovel: string = '';

  teste = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque minima veniam, '
  
  mostraVisualizar = true;
  
  constructor(private router: Router, private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
  }

  vaiParaImovel(){
    this.router.navigate(['/imovel', this.idImovel],{
      relativeTo: this.activeRouter,
    });
  }
}
