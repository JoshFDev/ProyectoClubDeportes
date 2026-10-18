"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class MiembrosController {
    async lista(req, res) {
        try {
            const miembros = await database_1.default.query('SELECT * FROM miembros');
            return res.json(miembros);
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Error al obtener miembros" });
        }
    }
    async crear(req, res) {
        try {
            await database_1.default.query('INSERT INTO miembros SET ?', [req.body]);
            return res.json({ message: 'Miembro creado correctamente' });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error al crear miembro' });
        }
    }
    async actualizar(req, res) {
        const { idMiembros } = req.params;
        try {
            const result = await database_1.default.query('UPDATE miembros SET ? WHERE idMiembros = ?', [req.body, idMiembros]);
            return res.json({ message: 'Miembro actualizado correctamente' });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error al actualizar miembro' });
        }
    }
    async borrar(req, res) {
        const { idMiembros } = req.params;
        try {
            await database_1.default.query('DELETE FROM miembros WHERE idMiembros = ?', [idMiembros]);
            return res.json({ message: 'Miembro eliminado correctamente' });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error al eliminar miembro' });
        }
    }
    async buscar(req, res) {
        const { idMiembros } = req.params;
        try {
            const miembro = await database_1.default.query('SELECT * FROM miembros WHERE idMiembros = ?', [idMiembros]);
            if (miembro.length > 0) {
                return res.json(miembro[0]);
            }
            return res.status(404).json({ message: 'No se encontró el miembro' });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error al buscar miembro' });
        }
    }
}
exports.default = new MiembrosController();
//# sourceMappingURL=miembrosController.js.map