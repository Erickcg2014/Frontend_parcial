import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contrato } from '../contratos/contrato.model';

@Injectable({
  providedIn: 'root',
})
export class ContratosService {
  private apiUrl = 'http://localhost:8080/api/contratos';

  constructor(private http: HttpClient) {}

  // Obtener todos los contratos
  getContratos(): Observable<Contrato[]> {
    return this.http.get<Contrato[]>(this.apiUrl);
  }

  // Obtener un contrato por ID
  getContratoById(id: number): Observable<Contrato> {
    return this.http.get<Contrato>(`${this.apiUrl}/${id}`);
  }

  // Agregar un nuevo contrato
  addContrato(contrato: Contrato): Observable<Contrato> {
    return this.http.post<Contrato>(this.apiUrl, contrato);
  }

  // Actualizar un contrato existente
  updateContrato(id: number, contrato: Contrato): Observable<Contrato> {
    return this.http.put<Contrato>(`${this.apiUrl}/${id}`, contrato);
  }

  // Eliminar un contrato
  deleteContrato(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
