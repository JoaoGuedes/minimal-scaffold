'use strict';

import angular from 'angular';
import router from 'angular-ui-router';
import 'lodash';
import 'restangular';

let app = angular.module('app', [router, 'restangular']);

//Routes
app.config(($urlRouterProvider, RestangularProvider) => {
    RestangularProvider.setBaseUrl('/api');
    $urlRouterProvider.otherwise('/users');
});

export default app;
