import { Routes } from '@angular/router';
import { MiembrosListComponent } from './componentes/miembros-list/miembros-list.component';
import { MiembrosFormComponent } from './componentes/miembros-form/miembros-form.component';
import { EntrenadoresListComponent } from './componentes/entrenadores-list/entrenadores-list.component';
import { EntrenadoresFormComponent } from './componentes/entrenadores-form/entrenadores-form.component';
import { DisciplinasListComponent } from './componentes/disciplinas-list/disciplinas-list.component';
import { DisciplinasFormComponent } from './componentes/disciplinas-form/disciplinas-form.component';
import { EventoDeportivoListComponent } from './componentes/evento-deportivo-list/evento-deportivo-list.component';
import { EventoDeportivoFormComponent } from './componentes/evento-deportivo-form/evento-deportivo-form.component';
import { InscripcionesFormComponent } from './componentes/inscripciones-form/inscripciones-form.component';
import { InscripcionesListComponent } from './componentes/inscripciones-list/inscripciones-list.component';
import { MiembroseventodeportivoFormComponent } from './componentes/miembroseventodeportivo-form/miembroseventodeportivo-form.component';
import { MiembroseventodeportivoListComponent } from './componentes/miembroseventodeportivo-list/miembroseventodeportivo-list.component';
export const routes: Routes = [
    {
        path: '',
        redirectTo: '/index',
        pathMatch: 'full'
    },
    {
        path: 'miembros',
        component: MiembrosListComponent
    },
    {
        path: 'miembros/agregar',
        component: MiembrosFormComponent
    },
    {
        path: 'miembros/actualizar/:idMiembros',
        component: MiembrosFormComponent

    },
    {
        path: 'entrenadores',
        component: EntrenadoresListComponent
    },
    {
        path: 'entrenadores/agregar',
        component: EntrenadoresFormComponent
    },
    {
        path: 'entrenadores/actualizar/:idEntrenadores',
        component: EntrenadoresFormComponent
    },
    {
        path: 'disciplinas',
        component: DisciplinasListComponent
    },
    {
        path: 'disciplinas/agregar',
        component: DisciplinasFormComponent
    },
    {
        path: 'disciplinas/actualizar/:idDisciplinas',
        component: DisciplinasFormComponent
    },
    {
        path: 'eventos',
        component: EventoDeportivoListComponent
    },
    {
        path: 'eventos/agregar',
        component: EventoDeportivoFormComponent
    },
    {
        path: 'eventos/actualizar/:idEventoDeportivo',
        component: EventoDeportivoFormComponent
    },
    {
        path: 'inscripciones',
        component: InscripcionesListComponent
    },
    {
        path: 'inscripciones/agregar',
        component: InscripcionesFormComponent
    },
    {
        path: 'inscripciones/actualizar/:idInscripciones',
        component: InscripcionesFormComponent
    },
    {
        path: 'miembroseventodeportivo',
        component: MiembroseventodeportivoListComponent
    },
    {
        path: 'miembroseventodeportivo/agregar',
        component: MiembroseventodeportivoFormComponent
    },
    {
        path: 'miembroseventodeportivo/actualizar/:idMiembrosEventoDeportivo',
        component: MiembroseventodeportivoFormComponent
    }


];
