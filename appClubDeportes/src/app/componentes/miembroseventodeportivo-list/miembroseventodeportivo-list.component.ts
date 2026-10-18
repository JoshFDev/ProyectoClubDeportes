import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { MiembroEventoDeportivoService } from '../../servicios/miembro-evento-deportivo.service';
import { MiembroEventoDeportivo } from '../../modelos/MiembroEventoDeportivo';

@Component({
  selector: 'app-miembroseventodeportivo-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './miembroseventodeportivo-list.component.html',
  styleUrls: ['./miembroseventodeportivo-list.component.css']
})
export class MiembroseventodeportivoListComponent implements OnInit {
  miembrosEventoDeportivo: MiembroEventoDeportivo[] = [];
  miembrosEventoDeportivoFiltrados: MiembroEventoDeportivo[] = [];
  terminoBusqueda: string = '';

  constructor(private miembroEventoDeportivoService: MiembroEventoDeportivoService) {}

  ngOnInit(): void {
    this.obtenerTodos();
  }

  obtenerTodos(): void {
    this.miembroEventoDeportivoService.getMiembrosEventoDeportivo().subscribe(
      (res: MiembroEventoDeportivo[]) => {
        this.miembrosEventoDeportivo = res;
        this.miembrosEventoDeportivoFiltrados = res;
      },
      err => console.error('Error al cargar los datos:', err)
    );
  }

  filtrar(): void {
    const termino = this.terminoBusqueda.toLowerCase().trim();
    if (!termino) {
      this.miembrosEventoDeportivoFiltrados = this.miembrosEventoDeportivo;
    } else {
      this.miembrosEventoDeportivoFiltrados = this.miembrosEventoDeportivo.filter(m =>
        m.Miembros_idMiembros?.toLowerCase().includes(termino) ||
        m.EventoDeportivo_idEventoDeportivo?.toString().includes(termino)
      );
    }
  }

  eliminar(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar esta inscripción?')) {
      this.miembroEventoDeportivoService.deleteMiembroEventoDeportivo(id).subscribe(
        () => {
          this.obtenerTodos(); // Recarga lista actualizada
        },
        err => console.error('Error al eliminar el registro:', err)
      );
    }
  }
}
