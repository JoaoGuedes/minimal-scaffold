'use strict';

let app = angular.module('app', ['ui.router', 'restangular']);

//Routes
app.config(($urlRouterProvider, RestangularProvider) => {
    RestangularProvider.setBaseUrl('/api');
    $urlRouterProvider.otherwise('/users');
});

export default app;
