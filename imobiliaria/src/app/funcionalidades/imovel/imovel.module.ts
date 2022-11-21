import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalheImovelComponent } from './detalhe-imovel/detalhe-imovel.component';
import { ImovelComponent } from './imovel.component';
import { MaterialExampleModule } from 'src/material.module';
import { CardImoveisComponent } from 'src/app/shared/componentes/card-imoveis/card-imoveis.component';
import { ListarImoveisComponent } from './listar-imoveis/listar-imoveis.component';
import { CriarImovelComponent } from './criar-imovel/criar-imovel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CorretorServiceService } from 'src/app/shared/http-service/corretor-service/corretor-service.service';



@NgModule({
  declarations: [
    DetalheImovelComponent,
    ImovelComponent,
    CriarImovelComponent,
  ],
  imports: [
    CommonModule,
    MaterialExampleModule,
    ReactiveFormsModule,
  ],
  
})
export class ImovelModule { }
