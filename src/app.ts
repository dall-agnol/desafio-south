const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const application = (port: number) => {
    app.use(bodyParser.json({limit: '50mb'}));
    app.use(bodyParser.urlencoded({
        limit: '50mb',
        extended: true
    }));
    
    app.use(cors());
    app.use(express.json());
    app.listen(process.env.PORT || port, () => {
        console.log('aplicação iniciada.');
    })
}



export default application;