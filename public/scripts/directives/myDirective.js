'use strict';

import app from '../app.js';

app.directive('myDirective', function() {
    return {
        restrict: 'E',
        scope: {},
        link: function(scope, element, attrs) {
            //Add stuff
        },
        template: require('./myDirective.html')
    }
});
