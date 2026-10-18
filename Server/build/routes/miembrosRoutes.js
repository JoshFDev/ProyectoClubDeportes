"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const miembrosController_1 = __importDefault(require("../controllers/miembrosController"));
class MiembrosRoutes {
    router = (0, express_1.Router)();
    constructor() {
        this.config();
    }
    config() {
        this.router.get('/', miembrosController_1.default.lista);
        this.router.post('/', miembrosController_1.default.crear);
        this.router.put('/:idMiembros', miembrosController_1.default.actualizar);
        this.router.delete('/:idMiembros', miembrosController_1.default.borrar);
        this.router.get('/:idMiembros', miembrosController_1.default.buscar);
    }
}
const miembrosRoutes = new MiembrosRoutes();
exports.default = miembrosRoutes.router;
//# sourceMappingURL=miembrosRoutes.js.map