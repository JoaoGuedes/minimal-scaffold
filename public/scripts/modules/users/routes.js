'use strict';

import app from '../../app.js';
import ListController from './controllers/list.js';
import ViewController from './controllers/view.js';

app.config($stateProvider => {

        $stateProvider
            .state('list', {
                url: '/users',
                controller: ListController,
                templateUrl: 'scripts/modules/users/views/list.html'
            })
            .state('view', {
                url: '/users/:id',
                controller: ViewController,
                templateUrl: 'scripts/modules/users/views/view.html'
            });

    }
);
