"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const facturaController_1 = __importDefault(require("../controllers/facturaController"));
class FacturaRoutes {
    router = (0, express_1.Router)();
    constructor() {
        this.config();
    }
    config() {
        this.router.get('/', facturaController_1.default.lista);
        this.router.post('/', facturaController_1.default.crear);
        this.router.put('/:idFactura', facturaController_1.default.actualizar);
        this.router.delete('/:idFactura', facturaController_1.default.borrar);
        this.router.get('/:idFactura', facturaController_1.default.buscar);
    }
}
const facturaRoutes = new FacturaRoutes();
exports.default = facturaRoutes.router;
//# sourceMappingURL=facturaRoutes.js.map