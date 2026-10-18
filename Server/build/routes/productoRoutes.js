"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const disciplinasController_1 = __importDefault(require("../controllers/disciplinasController"));
class ProductoRoutes {
    router = (0, express_1.Router)();
    constructor() {
        this.config();
    }
    config() {
        this.router.get('/', disciplinasController_1.default.lista);
    }
}
const disciplinasRoutes = new ProductoRoutes();
exports.default = disciplinasRoutes.router;
//# sourceMappingURL=productoRoutes.js.map