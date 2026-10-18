import { Router } from "express";
import inscripcionesController from "../controllers/inscripcionesController";

class InscripcionesRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', inscripcionesController.lista);
        this.router.post('/', inscripcionesController.crear);
        this.router.put('/:idInscripciones', inscripcionesController.actualizar);
        this.router.delete('/:idInscripciones', inscripcionesController.borrar);
        this.router.get('/:idInscripciones', inscripcionesController.buscar);
    }
}

const inscripcionesRoutes = new InscripcionesRoutes();
export default inscripcionesRoutes.router;
