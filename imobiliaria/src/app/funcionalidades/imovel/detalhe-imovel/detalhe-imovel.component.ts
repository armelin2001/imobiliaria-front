import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlugaImovelDto, ImovelDto } from 'src/app/models/imovel-dto';
import { ImovelService } from 'src/app/shared/http-service/imovel-service/imovel-service';
import { LocalstorageService } from 'src/app/shared/localstorage/localstorage.service';

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
  usuarioLogado=false;
  usuario = this.localStorage.obterUsuario("usuario");
  ehCorretor = false;

  constructor(private activeRoute: ActivatedRoute, 
    private imovelService: ImovelService,
    private localStorage: LocalstorageService,
    private router: Router) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params)=>{
      this.idImovel = params['idImovel'];
    });
    this.carregaImovel();
    this.verificaUsuarioLogado();
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

  verificaUsuarioLogado(){
    if(this.usuario && !this.usuario.ehCorretor){
      this.usuarioLogado = true;
    }
    if(this.usuario && this.usuario.ehCorretor){
      this.ehCorretor = true;
    }
  }

  alugaImovel(){
    if(this.usuario){
      const alugaImovel: AlugaImovelDto = {
        idImovel: this.idImovel,
        idCliente: this.usuario.id,
      }
      this.imovelService.alugaImovel(alugaImovel).subscribe(
        (res)=>{
          console.log(res);
          this.router.navigate(['/']);
        },
        (error)=>{
          console.log(error);
          this.router.navigate(['/']);
        }
      );
    }
  }

  removeImovel(){
    this.imovelService.removeImovel(this.idImovel).subscribe(
      (res)=>{
        console.log(res);
        this.router.navigate(['/']);
      },
      (error)=>{
        console.log(error);
        this.router.navigate(['/']);
      }
    )
  }
}
