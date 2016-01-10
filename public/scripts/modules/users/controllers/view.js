'use strict';

let ViewController = function($scope, $stateParams, Users) {

    Users.get($stateParams.id)
        .then(user => $scope.user = user);

};

ViewController.$inject = ['$scope', '$stateParams', 'Users'];

export default ViewController;
