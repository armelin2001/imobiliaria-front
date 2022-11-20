import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from 'src/material.module';
import { MenuSuperiorComponent } from './shared/componentes/menu-superior/menu-superior.component';
import { ImovelModule } from './funcionalidades/imovel/imovel.module';
import { ListarImoveisComponent } from './funcionalidades/imovel/listar-imoveis/listar-imoveis.component';
import { CardImoveisComponent } from './shared/componentes/card-imoveis/card-imoveis.component';
import { HomeComponent } from './funcionalidades/home/home.component';
import { LoginComponent } from './funcionalidades/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuSuperiorComponent,
    HomeComponent,
    CardImoveisComponent,
    ListarImoveisComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MaterialExampleModule,  
    ImovelModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
