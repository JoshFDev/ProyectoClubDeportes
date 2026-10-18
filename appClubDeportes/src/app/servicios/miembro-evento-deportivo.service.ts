import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MiembroEventoDeportivo } from '../modelos/MiembroEventoDeportivo';

@Injectable({
  providedIn: 'root'
})
export class MiembroEventoDeportivoService {
  private API_URI = 'http://localhost:3000/app';

  constructor(private http: HttpClient) { }


  getMiembrosEventoDeportivo(): Observable<MiembroEventoDeportivo[]> {
    return this.http.get<MiembroEventoDeportivo[]>(`${this.API_URI}/miembroseventodeportivo`);
  }

  getMiembroEventoDeportivo(id: number): Observable<MiembroEventoDeportivo> {
    return this.http.get<MiembroEventoDeportivo>(`${this.API_URI}/miembroseventodeportivo/${id}`);
  }

  createMiembroEventoDeportivo(miembro: MiembroEventoDeportivo): Observable<MiembroEventoDeportivo> {
    return this.http.post<MiembroEventoDeportivo>(`${this.API_URI}/miembroseventodeportivo`, miembro);
  }

  deleteMiembroEventoDeportivo(id: number): Observable<any> {
    return this.http.delete(`${this.API_URI}/miembroseventodeportivo/${id}`);
  }

  updateMiembroEventoDeportivo(id: number, miembro: MiembroEventoDeportivo): Observable<MiembroEventoDeportivo> {
    return this.http.put<MiembroEventoDeportivo>(`${this.API_URI}/miembroseventodeportivo/${id}`, miembro);
  }
}
