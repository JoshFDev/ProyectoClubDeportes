import { Request, Response } from "express";
import pool from "../database";

class InscripcionesController {

    public async lista(req: Request, res: Response): Promise<Response> {
        try {
            const inscripciones = await pool.query('SELECT * FROM inscripciones');
            return res.json(inscripciones);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Error al obtener inscripciones" });
        }
    }

    public async crear(req: Request, res: Response): Promise<Response> {
        try {
            await pool.query('INSERT INTO inscripciones SET ?', [req.body]);
            return res.json({ message: 'Inscripción creada correctamente' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error al crear inscripción' });
        }
    }

    public async actualizar(req: Request, res: Response): Promise<Response> {
        const { idInscripciones } = req.params;
        try {
            await pool.query('UPDATE inscripciones SET ? WHERE idInscripciones = ?', [req.body, idInscripciones]);
            return res.json({ message: 'Inscripción actualizada correctamente' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error al actualizar inscripción' });
        }
    }

    public async borrar(req: Request, res: Response): Promise<Response> {
        const { idInscripciones } = req.params;
        try {
            await pool.query('DELETE FROM inscripciones WHERE idInscripciones = ?', [idInscripciones]);
            return res.json({ message: 'Inscripción eliminada correctamente' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error al eliminar inscripción' });
        }
    }

    public async buscar(req: Request, res: Response): Promise<Response> {
        const { idInscripciones } = req.params;
        try {
            const inscripcion: any = await pool.query('SELECT * FROM inscripciones WHERE idInscripciones = ?', [idInscripciones]);
            if (inscripcion.length > 0) {
                return res.json(inscripcion[0]);
            }
            return res.status(404).json({ message: 'No se encontró la inscripción' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error al buscar inscripción' });
        }
    }
}

export default new InscripcionesController();
