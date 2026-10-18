"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class DisciplinasController {
    async lista(req, res) {
        try {
            const disciplinas = await database_1.default.query('SELECT * FROM disciplinas');
            res.json(disciplinas);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error al obtener disciplinas" });
        }
    }
    async crear(req, res) {
        //console.log(req.body);
        await database_1.default.query('insert into disciplinas set ?', [req.body]);
        res.json({ message: 'Se guardo una disciplina' });
    }
    async actualizar(req, res) {
        const { idDisciplinas } = req.params;
        await database_1.default.query('update disciplinas disciplinas set ? where idDisciplinas = ?', [req.body, idDisciplinas]);
        res.json({ message: 'Se actualizo una disciplina' });
    }
    async borrar(req, res) {
        const { idDisciplinas } = req.params;
        await database_1.default.query('delete from disciplinas where idDisciplinas = ?', [idDisciplinas]);
        res.json({ message: 'Se elimino una disciplina' });
    }
    async buscar(req, res) {
        const { idDisciplinas } = req.params;
        const disciplina = await database_1.default.query('select * from disciplinas where idDisciplinas = ?', [idDisciplinas]);
        if (disciplina.length > 0) {
            return res.json(disciplina[0]);
        }
        res.status(404).json({ message: 'No se encontro esa disciplina' });
    }
}
const disciplinasController = new DisciplinasController();
exports.default = disciplinasController;
//# sourceMappingURL=disciplinasController.js.map