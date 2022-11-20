import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { CriaClienteComponent } from './cria-cliente/cria-cliente.component';
import { CriaCorretorComponent } from './cria-corretor/cria-corretor.component';
import { MaterialExampleModule } from 'src/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UsuariosComponent,
    CriaClienteComponent,
    CriaCorretorComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    MaterialExampleModule,
    ReactiveFormsModule,
  ]
})
export class UsuariosModule { }
