'use strict';

require('../bower_components/angular/angular.min.js');
require('../bower_components/angular-ui-router/release/angular-ui-router.min.js');
require('../bower_components/lodash/lodash.min.js');
require('../bower_components/restangular/dist/restangular.min.js');

require('./app.js');

let services = require.context('./services/', true, /.js$/);
services.keys().forEach(services);

let directives = require.context('./directives/', true, /.js$/);
directives.keys().forEach(directives);

let filters = require.context('./filters/', true, /.js$/);
filters.keys().forEach(filters);

let controllers = require.context('./modules', true, /routes.js$/);
controllers.keys().forEach(controllers);
