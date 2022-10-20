import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalheImovelComponent } from './detalhe-imovel/detalhe-imovel.component';
import { ImovelComponent } from './imovel.component';
import { MaterialExampleModule } from 'src/material.module';
import { CardImoveisComponent } from 'src/app/shared/componentes/card-imoveis/card-imoveis.component';
import { ListarImoveisComponent } from './listar-imoveis/listar-imoveis.component';



@NgModule({
  declarations: [
    DetalheImovelComponent,
    ImovelComponent,
  ],
  imports: [
    CommonModule,
    MaterialExampleModule,
  ],
})
export class ImovelModule { }
