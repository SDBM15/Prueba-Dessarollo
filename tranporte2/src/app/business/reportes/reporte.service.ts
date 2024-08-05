import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class ReporteService {
  private apiUrl = 'http://localhost:3002/api/reporte';

  constructor(private http: HttpClient) {}

  getReporte(fechaInicio: string, fechaFin: string, transportistaId: string): Observable<any> {
    const params = new HttpParams()
      .set('fechaInicio', fechaInicio)
      .set('fechaFin', fechaFin)
      .set('transportistaId', transportistaId);

    return this.http.get<any>(this.apiUrl, { params });
  }
}
