import { Component, HostBinding } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Disciplina } from '../../modelos/Disciplina';
import { DisciplinaService } from '../../servicios/disciplina.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-disciplinas-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './disciplinas-form.component.html',
  styleUrl: './disciplinas-form.component.css'
})
export class DisciplinasFormComponent {
  @HostBinding('class') classes = 'row';

  disciplina: Disciplina = {
    idDisciplinas: '',
    nombreDisciplina: '',
    nivel: '',
    imagen: '',
    descripcion: '',
    duracion: 0,
    costo: 0,
    categoria: '',
    ubicacion: ''
  };

  edit: boolean = false;

  constructor(
    private disciplinaService: DisciplinaService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params['idDisciplinas']) {
      this.disciplinaService.getDisciplina(params['idDisciplinas']).subscribe(
        res => {
          console.log(res);
          this.disciplina = res;
          this.edit = true;
        },
        err => console.error(err)
      );
    }
  }

  addDisciplina() {
    this.disciplinaService.createDisciplina(this.disciplina).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['disciplinas']);
      },
      err => console.error(err)
    );
  }

  actualizaDisciplina() {
    const params = this.activatedRoute.snapshot.params;
    this.disciplinaService.updateDisciplina(params['idDisciplinas'], this.disciplina).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/disciplinas']);
      },
      err => console.error(err)
    );
  }
}
