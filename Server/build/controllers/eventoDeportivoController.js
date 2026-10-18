"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class EventoDeportivoController {
    async lista(req, res) {
        try {
            const eventos = await database_1.default.query('SELECT * FROM eventoDeportivo');
            return res.json(eventos);
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Error al obtener eventos deportivos" });
        }
    }
    async crear(req, res) {
        try {
            await database_1.default.query('INSERT INTO eventoDeportivo SET ?', [req.body]);
            return res.json({ message: 'Evento deportivo creado correctamente' });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error al crear evento deportivo' });
        }
    }
    async actualizar(req, res) {
        const { idEventoDeportivo } = req.params;
        try {
            await database_1.default.query('UPDATE eventoDeportivo SET ? WHERE idEventoDeportivo = ?', [req.body, idEventoDeportivo]);
            return res.json({ message: 'Evento deportivo actualizado correctamente' });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error al actualizar evento deportivo' });
        }
    }
    async borrar(req, res) {
        const { idEventoDeportivo } = req.params;
        try {
            await database_1.default.query('DELETE FROM eventoDeportivo WHERE idEventoDeportivo = ?', [idEventoDeportivo]);
            return res.json({ message: 'Evento deportivo eliminado correctamente' });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error al eliminar evento deportivo' });
        }
    }
    async buscar(req, res) {
        const { idEventoDeportivo } = req.params;
        try {
            const evento = await database_1.default.query('SELECT * FROM eventoDeportivo WHERE idEventoDeportivo = ?', [idEventoDeportivo]);
            if (evento.length > 0) {
                return res.json(evento[0]);
            }
            return res.status(404).json({ message: 'No se encontró el evento deportivo' });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error al buscar evento deportivo' });
        }
    }
}
exports.default = new EventoDeportivoController();
//# sourceMappingURL=eventoDeportivoController.js.map