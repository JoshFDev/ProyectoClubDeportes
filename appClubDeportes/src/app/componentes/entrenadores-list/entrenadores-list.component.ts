import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { EntrenadorService } from '../../servicios/entrenador.service';
import { Entrenador } from '../../modelos/Entrenador';

@Component({
  selector: 'app-entrenadores-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './entrenadores-list.component.html',
  styleUrl: './entrenadores-list.component.css'
})
export class EntrenadoresListComponent implements OnInit {
  entrenadores: Entrenador[] = [];
  entrenadoresFiltrados: Entrenador[] = [];
  terminoBusqueda: string = '';

  constructor(private entrenadorService: EntrenadorService) {}

  ngOnInit(): void {
    this.obtenerEntrenadores();
  }

  obtenerEntrenadores(): void {
    this.entrenadorService.getEntrenadores().subscribe(
      (res: Entrenador[]) => {
        this.entrenadores = res;
        this.entrenadoresFiltrados = res;
      },
      err => console.error(err)
    );
  }

  filtrarEntrenadores(): void {
  const termino = this.terminoBusqueda.toLowerCase().trim();
  if (!termino) {
    this.entrenadoresFiltrados = this.entrenadores;
  } else {
    this.entrenadoresFiltrados = this.entrenadores.filter(e =>
      e.nombreEntrenador?.toLowerCase().startsWith(termino) ||
      e.apellidoPaterno?.toLowerCase().startsWith(termino) ||
      e.apellidoMaterno?.toLowerCase().startsWith(termino) ||
      e.especialidad?.toLowerCase().startsWith(termino)
    );
  }
}

  borrarEntrenador(idEntrenadores: string): void {
    if (confirm('¿Seguro que deseas eliminar este entrenador?')) {
      this.entrenadorService.deleteEntrenador(idEntrenadores).subscribe(
        res => {
          console.log('Entrenador eliminado:', res);
          this.obtenerEntrenadores();
        },
        err => console.error('Error al eliminar entrenador:', err)
      );
    }
  }
}
