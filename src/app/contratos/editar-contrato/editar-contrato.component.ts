import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContratosService } from '../../servicios/contratos.service';
import { Contrato } from '../contrato.model';

@Component({
  selector: 'app-editar-contrato',
  templateUrl: './editar-contrato.component.html',
  styleUrls: ['./editar-contrato.component.scss'],
})
export class EditarContratoComponent implements OnInit {
  contrato: Contrato = {
    id: 0,
    identificador: '',
    valor: 0,
    nombreContratante: '',
    documentoContratante: '',
    nombreContratantista: '',
    documentoContratantista: '',
    fechaInicial: '',
    fechaFinal: '',
  };

  constructor(
    private contratosService: ContratosService,
    private route: ActivatedRoute,
    public router: Router
  ) {}


  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.contratosService.getContratoById(id).subscribe(
      (data) => {
        this.contrato = data;
      },
      (error) => {
        console.error('Error al cargar el contrato', error);
        alert('Ocurrió un error al cargar el contrato.');
      }
    );
  }

  onSubmit(): void {
    this.contratosService.updateContrato(this.contrato.id, this.contrato).subscribe(
      (response) => {
        alert('Contrato actualizado con éxito');
        this.router.navigate(['/listar']);
      },
      (error) => {
        console.error('Error al actualizar contrato', error);
        alert('Ocurrió un error al actualizar el contrato.');
      }
    );
  }
}
