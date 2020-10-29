import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes/index.routes';

const app = express();

const application = (port: number) => {
    app.use(bodyParser.json({limit: '50mb'}));
    app.use(bodyParser.urlencoded({
        limit: '50mb',
        extended: true
    }));
    app.use(cors());
    app.use(express.json());
    app.use(routes);
        
    app.listen(process.env.PORT || port, () => {
        console.log('aplicação iniciada.');
    });
   
}

export default application;