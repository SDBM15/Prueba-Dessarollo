import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SucursalesService {


  private apiUrl = 'http://localhost:3002/api';

  constructor(private http: HttpClient) { }

  getColaboradores(): Observable<any> {
    return this.http.get(`${this.apiUrl}/colaboradores`);
  }

  getSucursales(): Observable<any> {
    return this.http.get(`${this.apiUrl}/sucursales`);
  }

  getAsignaciones(): Observable<any> {
    return this.http.get(`${this.apiUrl}/asignaciones`);
  }

  createAsignacion(asignacion: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/asignaciones`, asignacion);
  }

  deleteAsignacion(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/asignaciones/${id}`);
  }
}
