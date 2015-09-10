var app = angular.module("RegExApp", ['ngRoute']);
app.config(['$routeProvider', '$httpProvider',  function($routeProvider, $httpProvider) {
    // $httpProvider.defaults.withCredentials = true;
    $routeProvider
      .when('/', {
        templateUrl: '/partials/splash.html',
        controller: 'RegExController'
      })
      // .when('/show/:id', {
      //   templateUrl: '/partials/show.html',
      //   controller: 'ShowController'
      // })
}])