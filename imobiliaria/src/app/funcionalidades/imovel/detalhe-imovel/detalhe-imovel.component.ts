import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImovelDto } from 'src/app/models/imovel-dto';
import { ImovelService } from 'src/app/shared/http-service/imovel-service/imovel-service';

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

  idImovel="";
  imovel: ImovelDto = {} as ImovelDto;
  valor=200;
  constructor(private activeRoute: ActivatedRoute, private imovelService: ImovelService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params)=>{
      this.idImovel = params['idImovel'];
    });
    this.carregaImovel();
  }
  carregaImovel(){
    this.imovelService.getImovelPorId(this.idImovel).subscribe(
      (res)=> {
        console.log(res);
        const imovel: ImovelDto = {
          id: res.id,
          tipoImoveis: res.tipoImoveis,
          corretorAnunciadoId: res.corretorAnunciadoId,
          estado: res.estado,
          bairro: res.bairro,
          rua: res.rua,
          cep: res.cep,
          cidade: res.cidade,
          complemento: res.complemento||"",
          valorNegociado: res.valorNegociado,
          criacao: res.criacao,
          venda: res.venda,
          reservado: res.reservado
        }
        this.imovel = imovel;
      }
    );

  }
}
