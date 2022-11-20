import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CriaClienteComponent } from './cria-cliente/cria-cliente.component';
import { CriaCorretorComponent } from './cria-corretor/cria-corretor.component';
import { UsuariosComponent } from "./usuarios.component";

const routes: Routes = [
    {
        path: '',
        component: UsuariosComponent,
        children: [
            {
                path: 'cliente',
                component: CriaClienteComponent
            },
            {
                path: 'corretor',
                component: CriaCorretorComponent
            }
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UsuariosRoutingModule{}