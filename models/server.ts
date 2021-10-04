import express, { Application } from 'express';
import userRoutes from '../routes/usuarios';
import celinaRoutes from '../routes/country';
import customerRoutes from '../routes/customer';
import cors from 'cors';
import db from '../database/connection';


class Server{
    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios'
    };

    // Pruebas Celina
    private apiCelinaPaths = {
        apicelina: '/apicelina',
        customer: '/apicelina/customers'
    };

    constructor(){
        this.app = express();
        this.port = '8000';

        // Métodos iniciales
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection(){

        try {
            await db.authenticate();
            console.log('Database online');
        } catch (error) {
            console.error(error);
        }
    }

    middlewares(){

        // Cors
        this.app.use( cors() );

        // Lectura del body
        this.app.use( express.json() );

        // Carpeta pública
        this.app.use( express.static('public'));

    }

    routes(){
        this.app.use(this.apiPaths.usuarios, userRoutes);
        this.app.use(this.apiCelinaPaths.apicelina, celinaRoutes);
        this.app.use(this.apiCelinaPaths.customer, customerRoutes);
    }   

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto ', this.port);
        })
    }
}

export default Server;