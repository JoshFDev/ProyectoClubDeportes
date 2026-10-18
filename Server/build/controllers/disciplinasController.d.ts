import { Request, Response } from "express";
declare class DisciplinasController {
    lista(req: Request, res: Response): Promise<void>;
    crear(req: Request, res: Response): Promise<void>;
    actualizar(req: Request, res: Response): Promise<void>;
    borrar(req: Request, res: Response): Promise<void>;
    buscar(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
}
declare const disciplinasController: DisciplinasController;
export default disciplinasController;
//# sourceMappingURL=disciplinasController.d.ts.map