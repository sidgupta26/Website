/**
 * Created by sigupta on 7/22/2016.
 */
var mainApp = angular.module('mainApp', ['ngRoute','ngScrollSpy']);


mainApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/home',
        controller: 'homeController'
    }).when('/resume', {
        templateUrl: '/resume',
        controller: 'resumeController'
    }).when('/contact', {
        templateUrl: '/contact',
        controller: 'contactController'
    })

}]);


mainApp.config(['scrollspyConfigProvider', function(ScrollspyConfigProvider) {
    ScrollspyConfigProvider.config = {
        offset: 250,
        throttle: function(e,t,n){var r,i;return function(){var s=n||this;var o=+(new Date),u=arguments;if(r&&o<r+t){clearTimeout(i);i=setTimeout(function(){r=o;e.apply(s,u)},t)}else{r=o;e.apply(s,u)}}},
        delay: 100
    };
}]);

/******************** DEMO SPECIFIC DIRECTIVES **********************/


mainApp.directive( 'expand', [ function() {
    return {
        restrict: 'A',
        link: function( scope, element, attrs, ctrls ){

            element.bind( 'click', function() {
                console.log('clicked');
                element[0].style.height = '1000px';

                //scope.$apply();
            });

        }
    };
}]);



/*
mainApp.run(function($rootScope, $location, $anchorScroll, $routeParams) {
    $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
        $location.hash($routeParams.scrollTo);
        $anchorScroll();
    });
})*/

mainApp.controller('homeController', ['$scope', function ($scope) {


}]);


mainApp.controller('resumeController', ['$scope', function ($scope) {

}]);


mainApp.controller('contactController', ['$scope', 'ContactService', function ($scope, ContactService) {

    $scope.message = {};
    $scope.message.user = {};
    $scope.sendMessage = saveMessage;
    $scope.success = false;
    function saveMessage() {

        console.log('Message -> ' + $scope.message);
        ContactService.saveMessage($scope.message)
            .then(function () {
                console.log('Message Saved');
                $scope.success = true;
                console.log($scope.success);

            })
            .catch(function (error) {
                console.log('Error saving message details');
            });
    }


}]);
