"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class FacturaController {
    async lista(req, res) {
        try {
            const factura = await database_1.default.query('SELECT * FROM factura');
            return res.json(factura);
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Error al obtener factura" });
        }
    }
    async crear(req, res) {
        try {
            await database_1.default.query('INSERT INTO factura SET ?', [req.body]);
            return res.json({ message: 'factura creado correctamente' });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error al crear factura' });
        }
    }
    async actualizar(req, res) {
        const { idFactura } = req.params;
        try {
            await database_1.default.query('UPDATE factura SET ? WHERE idFactura = ?', [req.body, idFactura]);
            return res.json({ message: 'factura actualizada correctamente :D' });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error al actualizar entrenador' });
        }
    }
    async borrar(req, res) {
        const { idFactura } = req.params;
        try {
            await database_1.default.query('DELETE FROM factura WHERE idFactura = ?', [idFactura]);
            return res.json({ message: 'factura eliminado correctamente' });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error al eliminar factura' });
        }
    }
    async buscar(req, res) {
        const { idFactura } = req.params;
        try {
            const factura = await database_1.default.query('SELECT * FROM factura WHERE idFactura = ?', [idFactura]);
            if (factura.length > 0) {
                return res.json(factura[0]);
            }
            return res.status(404).json({ message: 'No se encontró el factura' });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error al buscar factura' });
        }
    }
}
exports.default = new FacturaController();
//# sourceMappingURL=facturaController.js.map