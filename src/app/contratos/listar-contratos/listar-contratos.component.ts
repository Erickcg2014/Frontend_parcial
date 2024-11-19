import { Component, OnInit } from '@angular/core';
import { ContratosService } from '../../servicios/contratos.service';
import { Contrato } from '../contrato.model';

@Component({
  selector: 'app-listar-contratos',
  templateUrl: './listar-contratos.component.html',
  styleUrls: ['./listar-contratos.component.css'],
})
export class ListarContratosComponent implements OnInit {
  contratos: Contrato[] = [];

  constructor(private contratosService: ContratosService) {}

  ngOnInit(): void {
    this.contratosService.getContratos().subscribe(
      (data) => {
        this.contratos = data;
      },
      (error) => {
        console.error('Error al obtener contratos', error);
      }
    );
  }
  eliminarContrato(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este contrato?')) {
      this.contratosService.deleteContrato(id).subscribe(
        () => {
          alert('Contrato eliminado con éxito');
          this.contratos = this.contratos.filter((contrato) => contrato.id !== id);
        },
        (error) => {
          console.error('Error al eliminar contrato', error);
          alert('Ocurrió un error al intentar eliminar el contrato.');
        }
      );
    }
  }

}
