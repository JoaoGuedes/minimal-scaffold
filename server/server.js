'use strict';

import restify from 'restify';
import path from 'path';
import * as API from './api';
import route from './routes';

let server = restify.createServer({
    name: 'minimal scaffold',
    version: '1.0.0',
    formatters: {
        'text/html': (req, res, body) => body
    }
});

//Boilerplate stuff
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

//API Handlers, uses 'models/' as models root.
API.init('./models');

//Routes
route(server);

//Static file serving
//server.get(/\/.*/, restify.serveStatic({
//    directory: path.resolve(__dirname, '../public'),
//    default: 'index.html'
//}));

server.listen(9000, () => console.log('%s server started at %s', server.name, server.url));
