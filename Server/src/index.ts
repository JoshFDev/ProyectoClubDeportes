import express, { Application } from 'express';
import indexRoutes from './routes/indexRoutes';
import disciplinasRoutes from './routes/disciplinasRoutes';
import miembrosRoutes from './routes/miembrosRoutes';
import eventoDeportivoRoutes from './routes/eventoDeportivoRoutes';
import inscripcionesRoutes from './routes/inscripcionesRoutes';
import miembrosEventoDeportivoRoutes from './routes/miembrosEventoDeportivoRoutes';
import entrenadoresRoutes from './routes/entrenadoresRouter';
import morgan from 'morgan';
import cors from 'cors';

class Server {
    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.rutas();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    rutas(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/app/disciplinas', disciplinasRoutes);
        this.app.use('/app/miembros', miembrosRoutes);
        this.app.use('/app/eventoDeportivo', eventoDeportivoRoutes);
        this.app.use('/app/inscripciones', inscripcionesRoutes);
        this.app.use('/app/miembrosEventosDeportivo', miembrosEventoDeportivoRoutes);
        this.app.use('/app/entrenadores', entrenadoresRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor en puerto', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();
