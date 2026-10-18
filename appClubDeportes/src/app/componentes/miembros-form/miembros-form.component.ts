import { Component, HostBinding } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Miembro } from '../../modelos/Miembro';
import { MiembroService } from '../../servicios/miembro.service';
import { ActivatedRoute ,Router } from '@angular/router'; 

@Component({
  selector: 'app-miembros-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './miembros-form.component.html',
  styleUrl: './miembros-form.component.css'
})
export class MiembrosFormComponent {
@HostBinding('class') classes = 'row';

  miembro: Miembro = {
    idMiembros: '',
    nombreMiembros: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    sexo: '',
    fechaNacimiento: new Date(),
    categoria: '',
    direccion: '',
    correoMiembro: '',
    telefono: 0,
    imagen: ''
  };

  edit: boolean = false;

  constructor(
    private miembroService: MiembroService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params['idMiembros']) {
      this.miembroService.getMiembro(params['idMiembros']).subscribe(
        res => {
          console.log(res);
          this.miembro = res;
          this.edit = true;
        },
        err => console.error(err)
      );
    }
  }

  addMiembro() {
    this.miembroService.createMiembro(this.miembro).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['miembros']);
      },
      err => console.error(err)
    );
  }

  actualizaMiembro() {
    const params = this.activatedRoute.snapshot.params;
    this.miembroService.updateMiembro(params['idMiembros'], this.miembro).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/miembros']);
      },
      err => console.error(err)
    );
  }
}
