"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class MiembrosEventoDeportivoController {
    async lista(req, res) {
        try {
            const miembrosEventos = await database_1.default.query('SELECT * FROM miembroseventodeportivo');
            return res.json(miembrosEventos);
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Error al obtener registros de miembros en eventos deportivos" });
        }
    }
    async crear(req, res) {
        try {
            await database_1.default.query('INSERT INTO miembroseventodeportivo SET ?', [req.body]);
            return res.json({ message: 'Registro de miembro en evento deportivo creado correctamente' });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error al crear registro de miembro en evento deportivo' });
        }
    }
    async actualizar(req, res) {
        const { idMiembrosEventoDeportivo } = req.params;
        try {
            await database_1.default.query('UPDATE miembroseventodeportivo SET ? WHERE idMiembrosEventoDeportivo = ?', [req.body, idMiembrosEventoDeportivo]);
            return res.json({ message: 'Registro actualizado correctamente' });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error al actualizar registro' });
        }
    }
    async borrar(req, res) {
        const { idMiembrosEventoDeportivo } = req.params;
        try {
            await database_1.default.query('DELETE FROM miembroseventodeportivo WHERE idMiembrosEventoDeportivo = ?', [idMiembrosEventoDeportivo]);
            return res.json({ message: 'Registro eliminado correctamente' });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error al eliminar registro' });
        }
    }
    async buscar(req, res) {
        const { idMiembrosEventoDeportivo } = req.params;
        try {
            const registro = await database_1.default.query('SELECT * FROM miembroseventodeportivo WHERE idMiembrosEventoDeportivo = ?', [idMiembrosEventoDeportivo]);
            if (registro.length > 0) {
                return res.json(registro[0]);
            }
            return res.status(404).json({ message: 'No se encontró el registro' });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error al buscar registro' });
        }
    }
}
exports.default = new MiembrosEventoDeportivoController();
//# sourceMappingURL=miembrosEventoDeprotivoController.js.map