import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarContratosComponent } from './listar-contratos/listar-contratos.component';
import { AgregarContratoComponent } from './agregar-contrato/agregar-contrato.component';
import { EditarContratoComponent } from './editar-contrato/editar-contrato.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListarContratosComponent,
    AgregarContratoComponent,
    EditarContratoComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
})
export class ContratosModule {}
