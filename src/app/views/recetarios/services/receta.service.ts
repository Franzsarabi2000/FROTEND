import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MedicoModel } from '../models/receta.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecetaService {
  //url de su api (backend)
  private API_URL = 'http://localhost:8000/recetas';
  constructor(private http: HttpClient) {}

  getTodasLasRecetas(): Observable<MedicoModel[]> {
    return this.http.get<MedicoModel[]>(`${this.API_URL}/traerecetas`);
  }

  agregarReceta(receta: MedicoModel): Observable<MedicoModel> {
    return this.http.post<MedicoModel>(`${this.API_URL}/crear`, receta);
  }

  editarReceta(receta: MedicoModel): Observable<MedicoModel> {
    return this.http.put<MedicoModel>(
      `${this.API_URL}/editar/${receta._id}`,
      receta
    );
  }

  eliminarReceta(idReceta: string): Observable<MedicoModel> {
    console.log(idReceta);
    // return this.http.delete<RecetaModel>(`${this.API_URL}/eliminar/${idReceta}`);
    return this.http.delete<MedicoModel>(
      this.API_URL + '/eliminar/' + idReceta
    );
  }
}
