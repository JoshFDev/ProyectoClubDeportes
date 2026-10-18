import { Request, Response } from "express";
declare class EntrenadoresController {
    lista(req: Request, res: Response): Promise<Response>;
    crear(req: Request, res: Response): Promise<Response>;
    actualizar(req: Request, res: Response): Promise<Response>;
    borrar(req: Request, res: Response): Promise<Response>;
    buscar(req: Request, res: Response): Promise<Response>;
}
declare const _default: EntrenadoresController;
export default _default;
//# sourceMappingURL=entrenadoresController.d.ts.map