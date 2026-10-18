"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const eventoDeportivoController_1 = __importDefault(require("../controllers/eventoDeportivoController"));
class EventoDeportivoRoutes {
    router = (0, express_1.Router)();
    constructor() {
        this.config();
    }
    config() {
        this.router.get('/', eventoDeportivoController_1.default.lista);
        this.router.post('/', eventoDeportivoController_1.default.crear);
        this.router.put('/:idEventoDeportivo', eventoDeportivoController_1.default.actualizar);
        this.router.delete('/:idEventoDeportivo', eventoDeportivoController_1.default.borrar);
        this.router.get('/:idEventoDeportivo', eventoDeportivoController_1.default.buscar);
    }
}
const eventoDeportivoRoutes = new EventoDeportivoRoutes();
exports.default = eventoDeportivoRoutes.router;
//# sourceMappingURL=eventoDeportivoRoutes.js.map