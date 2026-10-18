"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const entrenadoresController_1 = __importDefault(require("../controllers/entrenadoresController"));
class EntrenadoresRoutes {
    router = (0, express_1.Router)();
    constructor() {
        this.config();
    }
    config() {
        this.router.get('/', entrenadoresController_1.default.lista);
        this.router.post('/', entrenadoresController_1.default.crear);
        this.router.put('/:idEntrenadores', entrenadoresController_1.default.actualizar);
        this.router.delete('/:idEntrenadores', entrenadoresController_1.default.borrar);
        this.router.get('/:idEntrenadores', entrenadoresController_1.default.buscar);
    }
}
const entrenadoresRoutes = new EntrenadoresRoutes();
exports.default = entrenadoresRoutes.router;
//# sourceMappingURL=entrenadoresRouter.js.map