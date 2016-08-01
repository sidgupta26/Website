/**
 * Created by sigupta on 7/24/2016.
 */

(function() {
    angular.module('mainApp').factory('ContactService', ['$http', '$q', function ($http, $q) {
        console.log('ContactService');
        var contactService = {};

        contactService.saveMessage = function (message) {
            console.log('Calling http service with message -> ' + JSON.stringify(message) );
            return $http.post('/contact/saveMessage', message).then(handleSuccess, handleError);

        };

        function handleSuccess(res) {
            console.log('Success');
            return res.data;
        }

        function handleError(res) {
            console.log(res.data);
            return $q.reject(res.data);

        }

        return contactService;
    }]);

})();