"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const miembrosEventoDeprotivoController_1 = __importDefault(require("../controllers/miembrosEventoDeprotivoController"));
class MiembrosEventoDeportivoRoutes {
    router = (0, express_1.Router)();
    constructor() {
        this.config();
    }
    config() {
        this.router.get('/', miembrosEventoDeprotivoController_1.default.lista);
        this.router.post('/', miembrosEventoDeprotivoController_1.default.crear);
        this.router.put('/:idMiembrosEventoDeportivo', miembrosEventoDeprotivoController_1.default.actualizar);
        this.router.delete('/:idMiembrosEventoDeportivo', miembrosEventoDeprotivoController_1.default.borrar);
        this.router.get('/:idMiembrosEventoDeportivo', miembrosEventoDeprotivoController_1.default.buscar);
    }
}
const miembrosEventoDeportivoRoutes = new MiembrosEventoDeportivoRoutes();
exports.default = miembrosEventoDeportivoRoutes.router;
//# sourceMappingURL=miembrosEventoDeportivoRoutes.js.map