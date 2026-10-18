import { Component, HostBinding, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { EntrenadorService } from '../../servicios/entrenador.service';
import { DisciplinaService } from '../../servicios/disciplina.service';

import { Entrenador } from '../../modelos/Entrenador';
import { Disciplina } from '../../modelos/Disciplina';

@Component({
  selector: 'app-entrenadores-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './entrenadores-form.component.html',
  styleUrl: './entrenadores-form.component.css'
})
export class EntrenadoresFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  entrenador: Entrenador = {
    idEntrenadores: '',
    nombreEntrenador: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    sexo: '',
    fechaNacimiento: new Date(),
    especialidad: '',
    direccion: '',
    correo: '',
    telefono: 0,
    idDisciplinas: '',
    imagen: ''
  };

  disciplinas: Disciplina[] = [];
  edit: boolean = false;

  constructor(
    private entrenadorService: EntrenadorService,
    private router: Router,
    private disciplinaService: DisciplinaService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cargarDisciplinas();
      const params = this.activatedRoute.snapshot.params;
    if (params['idEntrenadores']) {
      this.entrenadorService.getEntrenador(params['idEntrenadores']).subscribe(
        res => {
          console.log(res);
          this.entrenador = res;
          this.edit = true;
        },
        err => console.error(err)
      );
    }
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

  addEntrenador() {
    this.entrenadorService.createEntrenador(this.entrenador).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/entrenadores']);
      },
      err => console.error(err)
    );
  }

  actualizaEntrenador() {
    const params = this.activatedRoute.snapshot.params;
    this.entrenadorService.updateEntrenador(params['idEntrenadores'], this.entrenador).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/entrenadores']);
      },
      err => console.error(err)
    );
  }

  get nombreDisciplinaSeleccionada(): string {
    const disciplina = this.disciplinas.find(d => d.idDisciplinas === this.entrenador.idDisciplinas);
    return disciplina ? disciplina.nombreDisciplina || 'Nombre no disponible' : 'No especificada';
  }
}
