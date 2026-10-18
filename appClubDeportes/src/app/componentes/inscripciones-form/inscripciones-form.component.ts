import { Component, HostBinding, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InscripcionService } from '../../servicios/inscripcion.service';
import { MiembroService } from '../../servicios/miembro.service';
import { DisciplinaService } from '../../servicios/disciplina.service';
import { Inscripcion } from '../../modelos/Inscripcion';
import { Miembro } from '../../modelos/Miembro';
import { Disciplina } from '../../modelos/Disciplina';

@Component({
  selector: 'app-inscripciones-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inscripciones-form.component.html',
  styleUrls: ['./inscripciones-form.component.css']
})
export class InscripcionesFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  
  inscripcion: Inscripcion = {
    idInscripciones: 0,
    idMiembros: '',
    idDisciplinas: '',
    fechaInscripcion: new Date()
  };
  
  miembros: Miembro[] = [];
  disciplinas: Disciplina[] = [];
  edit: boolean = false;

  constructor(
    private inscripcionService: InscripcionService,
    private miembrosService: MiembroService,
    private disciplinaService: DisciplinaService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cargarMiembros();
    this.cargarDisciplinas();
    
    const params = this.activatedRoute.snapshot.params;
    if (params['idInscripciones']) {
      this.inscripcionService.getInscripcion(+params['idInscripciones'])
        .subscribe(
          res => {
            this.inscripcion = {
              ...res,
              fechaInscripcion: res.fechaInscripcion ? new Date(res.fechaInscripcion) : undefined
            };
            this.edit = true;
          },
          err => console.error('Error al obtener inscripción:', err)
        );
    }
  }

  cargarMiembros(): void {
    this.miembrosService.getMiembros().subscribe(
      data => {
        this.miembros = data;
      },
      error => {
        console.error('Error al cargar miembros', error);
      }
    );
  }

  cargarDisciplinas(): void {
    this.disciplinaService.getDisciplinas().subscribe(
      data => {
        this.disciplinas = data;
      },
      error => {
        console.error('Error al cargar disciplinas', error);
      }
    );
  }

  guardarInscripcion(): void {
    if (this.edit && this.inscripcion.idInscripciones != null) {
      this.inscripcionService.updateInscripcion(
        this.inscripcion.idInscripciones,
        this.inscripcion
      ).subscribe(
        res => {
          console.log('Inscripción actualizada:', res);
          this.router.navigate(['/inscripciones']);
        },
        err => console.error('Error al actualizar inscripción:', err)
      );
    } else {
      this.inscripcionService.createInscripcion(this.inscripcion).subscribe(
        res => {
          console.log('Inscripción creada:', res);
          this.router.navigate(['/inscripciones']);
        },
        err => console.error('Error al crear inscripción:', err)
      );
    }
  }

  get nombreMiembroSeleccionado(): string {
    const miembro = this.miembros.find(m => m.idMiembros === this.inscripcion.idMiembros);
    return miembro ? miembro.nombreMiembros || 'Nombre no disponible' : 'ID del Miembro';
  }

  get nombreDisciplinaSeleccionada(): string {
    const disciplina = this.disciplinas.find(d => d.idDisciplinas === this.inscripcion.idDisciplinas);
    return disciplina ? disciplina.nombreDisciplina || 'Nombre no disponible' : 'No especificada';
  }
}