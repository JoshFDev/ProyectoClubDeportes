import { Component, HostBinding, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventoDeportivoService } from '../../servicios/evento-deportivo.service';
import { EventoDeportivo } from '../../modelos/EventoDeportivo';

@Component({
  selector: 'app-evento-deportivo-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './evento-deportivo-form.component.html',
  styleUrls: ['./evento-deportivo-form.component.css']
})
export class EventoDeportivoFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  evento: EventoDeportivo = {
    idEventoDeportivo: 0,
    nombreEvento: '',
    fechaEvento: new Date(),
    horaEvento: '',
    lugar: '',
    descripcion: ''
  };

  edit: boolean = false;

  constructor(
    private eventoService: EventoDeportivoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params['idEventoDeportivo']) {
      this.eventoService.getEvento(+params['idEventoDeportivo'])
        .subscribe(
          res => {
            this.evento = {
              ...res,
            
            };
            this.edit = true;
          },
          err => console.error('Error al obtener evento deportivo:', err)
        );
    }
  }

  guardarEvento(): void {
    if (this.edit && this.evento.idEventoDeportivo != null) {
      this.eventoService.updateEvento(this.evento.idEventoDeportivo, this.evento)
        .subscribe(
          res => {
            console.log('Evento actualizado:', res);
            this.router.navigate(['/eventos']);
          },
          err => console.error('Error al actualizar evento:', err)
        );
    } else {
      this.eventoService.createEvento(this.evento)
        .subscribe(
          res => {
            console.log('Evento creado:', res);
            this.router.navigate(['/eventos']);
          },
          err => console.error('Error al crear evento:', err)
        );
    }
  }
}
