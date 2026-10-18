import { Request, Response } from "express";
import pool from "../database";

class MiembrosController {

    public async lista(req: Request, res: Response): Promise<Response> {
        try {
            const miembros = await pool.query('SELECT * FROM miembros');
            return res.json(miembros);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Error al obtener miembros" });
        }
    }

    public async crear(req: Request, res: Response): Promise<Response> {
        try {
            await pool.query('INSERT INTO miembros SET ?', [req.body]);
            return res.json({ message: 'Miembro creado correctamente' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error al crear miembro' });
        }
    }

    public async actualizar(req: Request, res: Response): Promise<Response> {
        const { idMiembros } = req.params;
        try {
            const result = await pool.query('UPDATE miembros SET ? WHERE idMiembros = ?', [req.body, idMiembros]);
            return res.json({ message: 'Miembro actualizado correctamente' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error al actualizar miembro' });
        }
    }

    public async borrar(req: Request, res: Response): Promise<Response> {
        const { idMiembros } = req.params;
        try {
            await pool.query('DELETE FROM miembros WHERE idMiembros = ?', [idMiembros]);
            return res.json({ message: 'Miembro eliminado correctamente' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error al eliminar miembro' });
        }
    }

    public async buscar(req: Request, res: Response): Promise<Response> {
        const { idMiembros } = req.params;
        try {
            const miembro: any = await pool.query('SELECT * FROM miembros WHERE idMiembros = ?', [idMiembros]);
            if (miembro.length > 0) {
                return res.json(miembro[0]);
            }
            return res.status(404).json({ message: 'No se encontró el miembro' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error al buscar miembro' });
        }
    }
    
}

export default new MiembrosController();
