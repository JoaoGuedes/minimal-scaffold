'use strict';

let ListController = function($scope, Users) {

    Users.list()
        .then(users => $scope.users = users);
};

ListController.$inject = ['$scope', 'Users'];

export default ListController;
