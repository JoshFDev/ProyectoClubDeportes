import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EventoDeportivoService } from '../../servicios/evento-deportivo.service';
import { EventoDeportivo } from '../../modelos/EventoDeportivo';

@Component({
  selector: 'app-evento-deportivo-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './evento-deportivo-list.component.html',
  styleUrl: './evento-deportivo-list.component.css'
})
export class EventoDeportivoListComponent implements OnInit {
  eventosDeportivos: EventoDeportivo[] = [];
  eventosFiltrados: EventoDeportivo[] = [];
  terminoBusqueda: string = '';

  constructor(private eventoService: EventoDeportivoService) {}

  ngOnInit(): void {
    this.obtenerEventos();
  }

  obtenerEventos(): void {
    this.eventoService.getEventos().subscribe(
      (res: EventoDeportivo[]) => {
        this.eventosDeportivos = res;
        this.eventosFiltrados = res;
      },
      err => console.error(err)
    );
  }

  filtrarEventos(): void {
    const termino = this.terminoBusqueda.toLowerCase().trim();
    if (!termino) {
      this.eventosFiltrados = this.eventosDeportivos;
    } else {
      this.eventosFiltrados = this.eventosDeportivos.filter(evento =>
        (evento.nombreEvento?.toLowerCase().includes(termino)) ||
        (evento.lugar?.toLowerCase().includes(termino)) ||
        (evento.descripcion?.toLowerCase().includes(termino))   
      );
    }
  }

  borrarEvento(idEventoDeportivo: number): void {
    if (confirm('¿Seguro que deseas eliminar este evento deportivo?')) {
      this.eventoService.deleteEvento(idEventoDeportivo).subscribe(
        res => {
          console.log('Evento eliminado:', res);
          this.obtenerEventos();
        },
        err => console.error('Error al eliminar evento:', err)
      );
    }
  }
}
