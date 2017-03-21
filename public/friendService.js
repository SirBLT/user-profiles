angular.module('userProfiles')
.service('friendService', function( $http ) {


    this.login = function( user ) {
      return $http.post('/api/login', user).then(function(response){
        return response;
      })
    };

    this.getFriends = function() {
      return $http.get('/api/profiles').then(function(response){
        return response;
      })
    };

});
