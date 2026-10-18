import { Request, Response } from "express";
declare class MiembrosController {
    lista(req: Request, res: Response): Promise<Response>;
    crear(req: Request, res: Response): Promise<Response>;
    actualizar(req: Request, res: Response): Promise<Response>;
    borrar(req: Request, res: Response): Promise<Response>;
    buscar(req: Request, res: Response): Promise<Response>;
}
declare const _default: MiembrosController;
export default _default;
//# sourceMappingURL=miembrosController.d.ts.map