import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarContratosComponent } from './listar-contratos/listar-contratos.component';
import { AgregarContratoComponent } from './agregar-contrato/agregar-contrato.component';
import { EditarContratoComponent } from './editar-contrato/editar-contrato.component';

const routes: Routes = [
  { path: '/listar', component: ListarContratosComponent },
  { path: '/agregar', component: AgregarContratoComponent },
  { path: '/editar/:id', component: EditarContratoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContratosRoutingModule {}
