import { Request, Response } from "express";
declare class FacturaController {
    lista(req: Request, res: Response): Promise<Response>;
    crear(req: Request, res: Response): Promise<Response>;
    actualizar(req: Request, res: Response): Promise<Response>;
    borrar(req: Request, res: Response): Promise<Response>;
    buscar(req: Request, res: Response): Promise<Response>;
}
declare const _default: FacturaController;
export default _default;
//# sourceMappingURL=facturaController.d.ts.map