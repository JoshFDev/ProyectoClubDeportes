import { Request, Response } from "express";
declare class InscripcionesController {
    lista(req: Request, res: Response): Promise<Response>;
    crear(req: Request, res: Response): Promise<Response>;
    actualizar(req: Request, res: Response): Promise<Response>;
    borrar(req: Request, res: Response): Promise<Response>;
    buscar(req: Request, res: Response): Promise<Response>;
}
declare const _default: InscripcionesController;
export default _default;
//# sourceMappingURL=inscripcionesController.d.ts.map