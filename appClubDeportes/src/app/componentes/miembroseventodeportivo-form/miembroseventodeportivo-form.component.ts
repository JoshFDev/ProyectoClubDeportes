import { Component, HostBinding } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MiembroEventoDeportivo } from '../../modelos/MiembroEventoDeportivo';
import { MiembroEventoDeportivoService } from '../../servicios/miembro-evento-deportivo.service';

@Component({
  selector: 'app-miembroseventodeportivo-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './miembroseventodeportivo-form.component.html',
  styleUrl: './miembroseventodeportivo-form.component.css'
})
export class MiembroseventodeportivoFormComponent {
  @HostBinding('class') classes = 'row';

  miembroEvento: MiembroEventoDeportivo = {
    Miembros_idMiembros: '',
    EventoDeportivo_idEventoDeportivo: 0
  };

  edit: boolean = false;

  constructor(
    private miembroEventoService: MiembroEventoDeportivoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params['idMiembrosEventoDeportivo']) {
      this.miembroEventoService.getMiembroEventoDeportivo(params['idMiembrosEventoDeportivo']).subscribe(
        res => {
          this.miembroEvento = res;
          this.edit = true;
        },
        err => console.error(err)
      );
    }
  }

  addMiembroEvento(): void {
    this.miembroEventoService.createMiembroEventoDeportivo(this.miembroEvento).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/miembroseventodeportivo']);
      },
      err => console.error(err)
    );
  }

  updateMiembroEvento(): void {
    const params = this.activatedRoute.snapshot.params;
    this.miembroEventoService.updateMiembroEventoDeportivo(params['idMiembrosEventoDeportivo'], this.miembroEvento).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/miembroseventodeportivo']);
      },
      err => console.error(err)
    );
  }
}
