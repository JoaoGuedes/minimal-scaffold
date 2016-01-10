'use strict';

import app from '../app.js';

app.filter('myFilter', [function() {
    return function(value) {
        return `${value}, you fool!`;
    };
}]);
