import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './funcionalidades/home/home.component';
import { CriarImovelComponent } from './funcionalidades/imovel/criar-imovel/criar-imovel.component';
import { DetalheImovelComponent } from './funcionalidades/imovel/detalhe-imovel/detalhe-imovel.component';
import { ImovelComponent } from './funcionalidades/imovel/imovel.component';
import { ListarImoveisComponent } from './funcionalidades/imovel/listar-imoveis/listar-imoveis.component';
import { LoginComponent } from './funcionalidades/login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'imovel', component: ImovelComponent},
  {path:'login', component: LoginComponent},
  {path: 'criarimovel', component: CriarImovelComponent},
  {
    path:'usuarios',
    loadChildren: ()=> import('./funcionalidades/usuarios/usuarios.module').then((m)=> m.UsuariosModule),
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
