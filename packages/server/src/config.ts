import dotenv from 'dotenv';
import convict from 'convict';
import Fs from 'fs-extra';

dotenv.config();

const pathFile = './config.json';

const schema = {
    port: {
        doc: 'Port',
        env: 'PORT',
        arg: 'port',
        format: 'port',
        default: 8089,
    },
    jwtSecret: {
        doc: 'JWT Secret',
        env: 'JWT_SECRET',
        arg: 'jwt-secret',
        default: Math.random()
            .toString(36)
            .substring(3),
    },
    db: {
        host: {
            default: 'localhost',
        },
        port: {
            default: undefined,
        },
        user: {
            env: 'DB_USER',
            default: '',
        },
        password: {
            env: 'DB_PASSWORD',
            default: '',
        },
        database: {
            env: 'DB_DATABASE',
            arg: 'database',
            default: 'info_agency',
        },
    }
};

export const config = convict(schema);

if (!Fs.existsSync(pathFile)) {
    console.log(`Created new config file "${pathFile}"`);
    Fs.outputFileSync(pathFile, config.toString());
}

config.loadFile(pathFile).validate();
