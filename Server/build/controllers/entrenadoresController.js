"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class EntrenadoresController {
    async lista(req, res) {
        try {
            const entrenadores = await database_1.default.query('SELECT * FROM entrenadores');
            return res.json(entrenadores);
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Error al obtener entrenadores" });
        }
    }
    async crear(req, res) {
        try {
            await database_1.default.query('INSERT INTO entrenadores SET ?', [req.body]);
            return res.json({ message: 'Entrenador creado correctamente' });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error al crear entrenador' });
        }
    }
    async actualizar(req, res) {
        const { idEntrenadores } = req.params;
        try {
            await database_1.default.query('UPDATE entrenadores SET ? WHERE idEntrenadores = ?', [req.body, idEntrenadores]);
            return res.json({ message: 'Entrenador actualizado correctamente' });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error al actualizar entrenador' });
        }
    }
    async borrar(req, res) {
        const { idEntrenadores } = req.params;
        try {
            await database_1.default.query('DELETE FROM entrenadores WHERE idEntrenadores = ?', [idEntrenadores]);
            return res.json({ message: 'Entrenador eliminado correctamente' });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error al eliminar entrenador' });
        }
    }
    async buscar(req, res) {
        const { idEntrenadores } = req.params;
        try {
            const entrenador = await database_1.default.query('SELECT * FROM entrenadores WHERE idEntrenadores = ?', [idEntrenadores]);
            if (entrenador.length > 0) {
                return res.json(entrenador[0]);
            }
            return res.status(404).json({ message: 'No se encontró el entrenador' });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error al buscar entrenador' });
        }
    }
}
exports.default = new EntrenadoresController();
//# sourceMappingURL=entrenadoresController.js.map