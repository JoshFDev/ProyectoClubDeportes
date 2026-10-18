"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const disciplinasRoutes_1 = __importDefault(require("./routes/disciplinasRoutes"));
const miembrosRoutes_1 = __importDefault(require("./routes/miembrosRoutes"));
const eventoDeportivoRoutes_1 = __importDefault(require("./routes/eventoDeportivoRoutes"));
const inscripcionesRoutes_1 = __importDefault(require("./routes/inscripcionesRoutes"));
const miembrosEventoDeportivoRoutes_1 = __importDefault(require("./routes/miembrosEventoDeportivoRoutes"));
const entrenadoresRouter_1 = __importDefault(require("./routes/entrenadoresRouter"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class Server {
    app;
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.rutas();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    rutas() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/app/disciplinas', disciplinasRoutes_1.default);
        this.app.use('/app/miembros', miembrosRoutes_1.default);
        this.app.use('/app/eventoDeportivo', eventoDeportivoRoutes_1.default);
        this.app.use('/app/inscripciones', inscripcionesRoutes_1.default);
        this.app.use('/app/miembrosEventosDeportivo', miembrosEventoDeportivoRoutes_1.default);
        this.app.use('/app/entrenadores', entrenadoresRouter_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor en puerto', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
//# sourceMappingURL=index.js.map