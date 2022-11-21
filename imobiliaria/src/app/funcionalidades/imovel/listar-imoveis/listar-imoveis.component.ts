import { Component, OnInit } from '@angular/core';
import { ImovelDto } from 'src/app/models/imovel-dto';
import { ImovelService } from 'src/app/shared/http-service/imovel-service/imovel-service';
import { CorretorServiceService } from 'src/app/shared/http-service/corretor-service/corretor-service.service';
@Component({
  selector: 'app-listar-imoveis',
  templateUrl: './listar-imoveis.component.html',
  styleUrls: ['./listar-imoveis.component.scss']
})
export class ListarImoveisComponent implements OnInit {
  listaImoveis: ImovelDto[]=[];
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
  constructor(private imovelService: ImovelService, 
    // private corretorServiceService: CorretorServiceService
    ){}
  ngOnInit(): void {
    for(let x=0; x < 35; x++){
      this.imoveis.push({
        tipoImovel: 'Apartamento',
        nomeRua: 'Rua do teste',
        valor: 0,
        bairroEestado: 'Bairro, Curitiba'
      });
    }
    this.carregaImoveis();
  }

  carregaImoveis(){
    this.imovelService.getListaImoveis().subscribe(
      (res)=> {
        res.forEach((obj: any)=>{
          const imovel: ImovelDto = {
            id: obj.id,
            tipoImoveis: obj.tipoImoveis,
            corretorAnunciadoId: obj.corretorAnunciadoId,
            estado: obj.estado,
            bairro: obj.bairro,
            rua: obj.rua,
            cep: obj.cep,
            cidade: obj.cidade,
            complemento: obj.complemento||"",
            valorNegociado: obj.valorNegociado,
            criacao: obj.criacao,
            venda: obj.venda,
            reservado: obj.reservado
          }
          this.listaImoveis.push(imovel);
        });
      }
    );
  }
}
