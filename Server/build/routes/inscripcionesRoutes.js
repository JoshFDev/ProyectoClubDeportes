"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const inscripcionesController_1 = __importDefault(require("../controllers/inscripcionesController"));
class InscripcionesRoutes {
    router = (0, express_1.Router)();
    constructor() {
        this.config();
    }
    config() {
        this.router.get('/', inscripcionesController_1.default.lista);
        this.router.post('/', inscripcionesController_1.default.crear);
        this.router.put('/:idInscripciones', inscripcionesController_1.default.actualizar);
        this.router.delete('/:idInscripciones', inscripcionesController_1.default.borrar);
        this.router.get('/:idInscripciones', inscripcionesController_1.default.buscar);
    }
}
const inscripcionesRoutes = new InscripcionesRoutes();
exports.default = inscripcionesRoutes.router;
//# sourceMappingURL=inscripcionesRoutes.js.map