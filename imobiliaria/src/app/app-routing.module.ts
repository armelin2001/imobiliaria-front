import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './funcionalidades/home/home.component';
import { DetalheImovelComponent } from './funcionalidades/imovel/detalhe-imovel/detalhe-imovel.component';
import { ImovelComponent } from './funcionalidades/imovel/imovel.component';
import { ListarImoveisComponent } from './funcionalidades/imovel/listar-imoveis/listar-imoveis.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'imovel', component: ImovelComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
