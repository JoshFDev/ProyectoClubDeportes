import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { RouterLink } from '@angular/router';
import { DisciplinaService } from '../../servicios/disciplina.service';  
import { Disciplina } from '../../modelos/Disciplina';                   
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disciplinas-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './disciplinas-list.component.html',
  styleUrls: ['./disciplinas-list.component.css']
})
export class DisciplinasListComponent implements OnInit {
  disciplinas: Disciplina[] = [];
  disciplinasFiltradas: Disciplina[] = [];
  terminoBusqueda: string = '';

  constructor(private disciplinaService: DisciplinaService) {}

  ngOnInit(): void {
    this.obtenerDisciplinas();
  }

  obtenerDisciplinas(): void {
    this.disciplinaService.getDisciplinas().subscribe(
      (res: Disciplina[]) => {
        this.disciplinas = res;
        this.disciplinasFiltradas = res;
      },
      err => console.error(err)
    );
  }

  filtrarDisciplinas(): void {
  const termino = this.terminoBusqueda.toLowerCase().trim();
  if (!termino) {
    this.disciplinasFiltradas = this.disciplinas;
  } else {
    this.disciplinasFiltradas = this.disciplinas.filter(d =>
      d.nombreDisciplina?.toLowerCase().startsWith(termino)
    );
  }
}


  borrarDisciplina(idDisciplinas: string): void {
    if (confirm('¿Seguro que deseas eliminar esta disciplina?')) {
      this.disciplinaService.deleteDisciplina(idDisciplinas).subscribe(
        res => {
          console.log('Disciplina eliminada:', res);
          this.obtenerDisciplinas();
        },
        err => console.error('Error al eliminar disciplina:', err)
      );
    }
  }
}
