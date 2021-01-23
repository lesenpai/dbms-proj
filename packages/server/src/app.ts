import express, { ErrorRequestHandler } from 'express';
import cors from 'cors';
import Boom from '@hapi/boom';
import { slog } from '@dbms-proj/utils';
import Sequelize from 'sequelize';
import { appLogging } from './tools/appLogging';
import './database';
import apiRoutes from './routes/api';
import Path from 'path';

// Error handler
const errHandler: ErrorRequestHandler = (err, req, res, next) => {
    appLogging('error')(req, res, () => {});
    slog.error(err.toString());

    if (err.statusCode) {
        res.status(err.statusCode).json(err);
        return;
    }

    if (err.isBoom) {
        const { statusCode, payload } = err.output;
        res.status(statusCode).json(payload);
        return;
    }

    console.log('err', JSON.parse(JSON.stringify(err)));

    if (err instanceof Sequelize.ValidationError) {}

    if (['SequelizeValidationError', 'SequelizeDatabaseError'].includes(err?.name)) {
        let message  = 'Ошибка при выполнении SQL запроса';
        let type = 'db error';

        if (err.errors?.length > 0) {
            [{ message, type }] = err.errors;
        } else if (err.parent?.message) {
            ({ message } = err.parent);
        }

        res.status(400).json({
            statusCode: 400,
            error: type,
            message,
        });
        return;
    }
    
    const defaultError = Boom.badImplementation(err.message || 'An internal server error occurred');
    const { statusCode, payload } = defaultError.output;
    res.status(statusCode).json(payload);
};

export async function createApp() {
    const app = express();

    let buildClientPath = Path.join(__dirname, '../../client/build');
    app
        // Backend middleware
        .use((req, res, next) => {
            res.jsongo = (e: any) => res.json({ response: e });
            next();
        })
        .use(appLogging())
        .use(cors())
        
        .use('/api', apiRoutes)
        .use('/uploads', express.static('./uploads'))
        
        .use(express.static(buildClientPath))

        app.get('/*', (req, res) => {
            res.sendFile(buildClientPath + '/index.html');
        })
            // Default 404
            /* .use((req, res, next) => {
            next(Boom.notFound());
        }) */

            .use(errHandler);

    return app;
}
