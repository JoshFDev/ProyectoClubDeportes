"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const disciplinasController_1 = __importDefault(require("../controllers/disciplinasController"));
class DisciplinasRoutes {
    router = (0, express_1.Router)();
    constructor() {
        this.config();
    }
    config() {
        this.router.get('/', disciplinasController_1.default.lista);
        this.router.post('/', disciplinasController_1.default.crear);
        this.router.put('/:idDisciplinas', disciplinasController_1.default.actualizar);
        this.router.delete('/:idDisciplinas', disciplinasController_1.default.borrar);
        this.router.get('/:idDisciplinas', disciplinasController_1.default.buscar);
    }
}
const disciplinasRoutes = new DisciplinasRoutes();
exports.default = disciplinasRoutes.router;
//# sourceMappingURL=disciplinasRoutes.js.map