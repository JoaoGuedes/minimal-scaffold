'use strict';

import app from '../../app.js';
import ListController from './controllers/list.js';
import ViewController from './controllers/view.js';

app.config($stateProvider => {

        $stateProvider
            .state('list', {
                url: '/users',
                controller: ListController,
                template: require('./views/list.html')
            })
            .state('view', {
                url: '/users/:id',
                controller: ViewController,
                template: require('./views/view.html')
            });

    }
);
