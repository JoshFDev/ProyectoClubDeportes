import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { RouterLink } from '@angular/router';
import { MiembroService } from '../../servicios/miembro.service';
import { Miembro } from '../../modelos/Miembro';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miembros-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './miembros-list.component.html',
  styleUrls: ['./miembros-list.component.css']  // <- corregido aquí (plural)
})
export class MiembrosListComponent implements OnInit {
  miembros: Miembro[] = [];
  miembrosFiltrados: Miembro[] = [];
  terminoBusqueda: string = '';

  constructor(private miembroService: MiembroService) {}

  ngOnInit(): void {
    this.obtenerMiembros();
  }

  obtenerMiembros(): void {
    this.miembroService.getMiembros().subscribe(
      (res: Miembro[]) => {
        this.miembros = res;
        this.miembrosFiltrados = res;
      },
      err => console.error(err)
    );
  }

  filtrarMiembros(): void {
    const termino = this.terminoBusqueda.toLowerCase().trim();
    if (!termino) {
      this.miembrosFiltrados = this.miembros;
    } else {
      this.miembrosFiltrados = this.miembros.filter(m =>
        (m.nombreMiembros?.toLowerCase().startsWith(termino)) ||
        (m.apellidoPaterno?.toLowerCase().startsWith(termino)) ||
        (m.apellidoMaterno?.toLowerCase().startsWith(termino)) ||
        (m.categoria?.toLowerCase().startsWith(termino))
      );
    }
  }

  borrarMiembro(idMiembros?: string): void {
  if (!idMiembros) {
    console.error('ID de miembro no definido');
    return;
  }

  if (confirm('¿Seguro que deseas eliminar este miembro?')) {
    this.miembroService.deleteMiembro(idMiembros).subscribe(
      res => {
        console.log('Miembro eliminado:', res);
        this.obtenerMiembros();
      },
      err => console.error('Error al eliminar miembro:', err)
    );
  }
}
}
