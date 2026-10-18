import { Router } from "express";
import miembrosController from "../controllers/miembrosController";

class MiembrosRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', miembrosController.lista);
        this.router.post('/', miembrosController.crear);
        this.router.put('/:idMiembros', miembrosController.actualizar);        
        this.router.delete('/:idMiembros', miembrosController.borrar);   
        this.router.get('/:idMiembros', miembrosController.buscar);                
    }
}

const miembrosRoutes = new MiembrosRoutes();
export default miembrosRoutes.router;