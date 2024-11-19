import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContratosService } from '../../servicios/contratos.service';
import { Contrato } from '../contrato.model';

@Component({
  selector: 'app-agregar-contrato',
  templateUrl: './agregar-contrato.component.html',
  styleUrls: ['./agregar-contrato.component.css'],
})
export class AgregarContratoComponent {
  constructor(private contratosService: ContratosService) {}

  onSubmit(form: NgForm): void {
    const nuevoContrato: Contrato = form.value;
    this.contratosService.addContrato(nuevoContrato).subscribe(
      (response) => {
        alert('Contrato agregado con éxito');
        form.reset();
      },
      (error) => {
        console.error('Error al agregar contrato', error);
        alert('Ocurrió un error al agregar el contrato.');
      }
    );
  }
}
