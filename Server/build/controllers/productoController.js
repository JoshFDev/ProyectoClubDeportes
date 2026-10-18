"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductoController {
    lista(req, res) {
        res.json({ text: 'Lista de Disciplinas' });
    }
}
const disciplinasController = new DisciplinasController();
exports.default = disciplinasController;
//# sourceMappingURL=productoController.js.map