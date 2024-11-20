import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContratosRoutingModule } from './contratos-routing.module';
import { ListarContratosComponent } from './listar-contratos/listar-contratos.component';
import { AgregarContratoComponent } from './agregar-contrato/agregar-contrato.component';
import { EditarContratoComponent } from './editar-contrato/editar-contrato.component';

@NgModule({
  declarations: [
    ListarContratosComponent, // Asegúrate de incluirlo aquí
    AgregarContratoComponent,
    EditarContratoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ContratosRoutingModule,
  ],
})
export class ContratosModule {}
