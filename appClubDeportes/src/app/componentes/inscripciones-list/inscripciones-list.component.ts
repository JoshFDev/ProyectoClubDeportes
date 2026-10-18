import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { InscripcionService } from '../../servicios/inscripcion.service';
import { Inscripcion } from '../../modelos/Inscripcion';

@Component({
  selector: 'app-inscripciones-list',
  standalone: true,
  imports: [ CommonModule, FormsModule, RouterLink ],
  templateUrl: './inscripciones-list.component.html',
  styleUrls: ['./inscripciones-list.component.css']
})
export class InscripcionesListComponent implements OnInit {
  inscripciones: Inscripcion[] = [];
  inscripcionesFiltradas: Inscripcion[] = [];
  terminoBusqueda: string = '';

  constructor(private inscripcionService: InscripcionService) {}

  ngOnInit(): void {
    this.obtenerInscripciones();
  }

  obtenerInscripciones(): void {
    this.inscripcionService.getInscripciones().subscribe(
      (res: Inscripcion[]) => {
        this.inscripciones = res;
        this.inscripcionesFiltradas = res;
      },
      err => console.error('Error al cargar inscripciones:', err)
    );
  }

  filtrarInscripciones(): void {
  const termino = this.terminoBusqueda.trim();
  if (!termino) {
    this.inscripcionesFiltradas = this.inscripciones;
  } else {
    this.inscripcionesFiltradas = this.inscripciones.filter(i =>
      i.idMiembros?.toString().startsWith(termino) ||
      i.idDisciplinas?.toString().startsWith(termino)
    );
  }
}

  borrarInscripcion(idInscripciones: number): void {
    if (confirm('¿Seguro que deseas eliminar esta inscripción?')) {
      this.inscripcionService.deleteInscripcion(idInscripciones).subscribe(
        _res => {
          console.log('Inscripción eliminada:', idInscripciones);
          this.obtenerInscripciones();
        },
        err => console.error('Error al eliminar inscripción:', err)
      );
    }
  }
}
