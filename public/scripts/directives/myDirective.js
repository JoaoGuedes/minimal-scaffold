'use strict';

import app from '../app.js';

app.directive('myDirective', function() {
    return {
        restrict: 'E',
        scope: {},
        link: function(scope, element, attrs) {},
        templateUrl: 'scripts/directives/myDirective.html'
    }
});
