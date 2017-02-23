angular.module('App')
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "views/layouts/layout.html",
      controller: "DefaultLayoutController"
    })
    .state('login', {
      url: '/login',
      templateUrl: 'views/login/views/login.html',
      controller: 'LoginController'
    })
    .state('logout', {
      url: '/logout',
      templateUrl: 'views/login/views/logout.html',
      controller: 'LogoutController'
    })
    .state('app.home', {
      url: '/home',
      templateUrl: 'views/home/views/home.html',
      controller: 'HomeController'
  });
})
