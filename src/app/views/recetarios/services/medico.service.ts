import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MedicoModel } from '../models/medico.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MedicoService {
  //url de su api (backend)
  private API_URL = 'http://localhost:8000/medicos';
  constructor(private http: HttpClient) {}

  getTodasLosMedicos(): Observable<MedicoModel[]> {
    return this.http.get<MedicoModel[]>(`${this.API_URL}/traermedicos`);
  }

  getTodasLosMedicosporEspecialidad(): Observable<MedicoModel[]> {
    return this.http.get<MedicoModel[]>(
      `${this.API_URL}/obtenermedico/specialty`
    );
  }

  agregarMedico(medico: MedicoModel): Observable<MedicoModel> {
    return this.http.post<MedicoModel>(`${this.API_URL}/crear`, medico);
  }

  editarMedico(medico: MedicoModel): Observable<MedicoModel> {
    return this.http.put<MedicoModel>(
      `${this.API_URL}/editar/${medico._id}`,
      medico
    );
  }

  eliminarmedico(idmedico: string): Observable<MedicoModel> {
    console.log(idmedico);
    return this.http.delete<MedicoModel>(
      `${this.API_URL}/eliminar/${idmedico}`
    );
  }
}
