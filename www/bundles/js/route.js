angular.module('App')
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "views/layouts/layout.html",
      controller: "layout"
    })
    .state('app.home', {
      url: '/home',
      templateUrl: 'views/home/views/home.html',
      controller: 'home'
    })
})
