"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class InscripcionesController {
    async lista(req, res) {
        try {
            const inscripciones = await database_1.default.query('SELECT * FROM inscripciones');
            return res.json(inscripciones);
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Error al obtener inscripciones" });
        }
    }
    async crear(req, res) {
        try {
            await database_1.default.query('INSERT INTO inscripciones SET ?', [req.body]);
            return res.json({ message: 'Inscripción creada correctamente' });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error al crear inscripción' });
        }
    }
    async actualizar(req, res) {
        const { idInscripciones } = req.params;
        try {
            await database_1.default.query('UPDATE inscripciones SET ? WHERE idInscripciones = ?', [req.body, idInscripciones]);
            return res.json({ message: 'Inscripción actualizada correctamente' });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error al actualizar inscripción' });
        }
    }
    async borrar(req, res) {
        const { idInscripciones } = req.params;
        try {
            await database_1.default.query('DELETE FROM inscripciones WHERE idInscripciones = ?', [idInscripciones]);
            return res.json({ message: 'Inscripción eliminada correctamente' });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error al eliminar inscripción' });
        }
    }
    async buscar(req, res) {
        const { idInscripciones } = req.params;
        try {
            const inscripcion = await database_1.default.query('SELECT * FROM inscripciones WHERE idInscripciones = ?', [idInscripciones]);
            if (inscripcion.length > 0) {
                return res.json(inscripcion[0]);
            }
            return res.status(404).json({ message: 'No se encontró la inscripción' });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error al buscar inscripción' });
        }
    }
}
exports.default = new InscripcionesController();
//# sourceMappingURL=inscripcionesController.js.map