import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SucursalesService } from '../sucursales.service';

@Component({
  selector: 'app-surcusales',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './surcusales.component.html',
  styleUrls: ['./surcusales.component.css']
})
export default class SurcusalesComponent implements OnInit {
  colaboradores: any[] = [];
  sucursales: any[] = [];
  asignaciones: any[] = [];
  colaboradorId: string = '';
  sucursalId: string = '';
  distancia: number = 0;

  constructor(private sucursalesservice: SucursalesService) { }

  ngOnInit(): void {
    this.loadColaboradores();
    this.loadSucursales();
    this.loadAsignaciones();
  }

  loadColaboradores(): void {
    this.sucursalesservice.getColaboradores().subscribe(data => {
      this.colaboradores = data;
    });
  }

  loadSucursales(): void {
    this.sucursalesservice.getSucursales().subscribe(data => {
      this.sucursales = data;
    });
  }

  loadAsignaciones(): void {
    this.sucursalesservice.getAsignaciones().subscribe(data => {
      this.asignaciones = data.map((asignacion: any) => ({
        ...asignacion,
        colaboradorNombre: asignacion.colaboradorId.nombre,
        sucursalNombre: asignacion.sucursalId.nombre
      }));
    });
  }

  asignarSucursal(): void {
    const nuevaAsignacion = {
      colaboradorId: this.colaboradorId,
      sucursalId: this.sucursalId,
      distanciaKm: this.distancia
    };

    this.sucursalesservice.createAsignacion(nuevaAsignacion).subscribe(() => {
      this.loadAsignaciones();
    });
  }

  eliminarAsignacion(asignacionId: string): void {
    this.sucursalesservice.deleteAsignacion(asignacionId).subscribe(() => {
      this.loadAsignaciones(); // Recarga la lista de asignaciones después de eliminar
    });
  }
}


