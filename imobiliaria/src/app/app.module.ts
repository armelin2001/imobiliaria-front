import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { CorretorServiceService } from './shared/http-service/corretor-service/corretor-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ImovelService } from './shared/http-service/imovel-service/imovel-service';
import { LoginService } from './shared/http-service/login-service/login.service';
import { ClienteServiceService } from './shared/http-service/cliente-service/cliente-service.service';
import { LocalstorageService } from './shared/localstorage/localstorage.service';

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
    HttpClientModule,
  ],
  providers: [
    CorretorServiceService,
    ImovelService,
    LoginService,
    ClienteServiceService,
    LocalstorageService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
