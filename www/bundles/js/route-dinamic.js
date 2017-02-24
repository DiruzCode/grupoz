angular.module('App')
.config(function($stateProvider, $urlRouterProvider, config) {

    $urlRouterProvider.when('', 'app/home');
    angular.forEach(config.module, function(provider) {
        $stateProvider
            .state('app.'+provider+'List', {
              url: '/'+provider+'List',
              templateUrl: 'views/'+provider+'/views/list.html',
              controller: provider+'List'
            })
            .state('app.'+provider, {
              url: '/'+provider+'/:id',
              templateUrl: 'views/'+provider+'/views/get.html',
              controller: provider
            })
            .state('app.'+provider+'Create', {
              url: '/user',
              templateUrl: 'views/'+provider+'/views/create.html',
              controller: provider+'Create'
            })
            .state('app.'+provider+'Update', {
              url: '/'+provider+'/:id/update',
              templateUrl: 'views/'+provider+'/views/update.html',
              controller: provider+'Update'
        });

    });

})
