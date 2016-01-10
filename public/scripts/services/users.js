'use strict';

import app from '../app.js';

var Users = function(Restangular) {

    //Mount endpoints for Users on the client side
    function get(id) {
        return Restangular.one('users', id).get();
    }

    function list() {
        return Restangular.all('users').getList();
    }

    return {
        get: get,
        list: list
    };

};

Users.$inject = ['Restangular'];

app.service('Users', Users);
