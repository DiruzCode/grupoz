app.controller('DefaultLayoutController', [
  '$scope',
  '$state',
  function($scope, $state) {

    $scope.config = {
      menu:  [{
        route: "app.home",
        icon: "ion-ios-home",
        label: "Inicio",
        active: true
      }, {
        route: "login",
        icon: "ion-chevron-right",
        label: "Login"
      }, {
        route: "logout",
        icon: "ion-chevron-right",
        label: "LogOut"
      }]
    };

    $scope.navigateTo = function(item) {
      angular.forEach($scope.config.menu, function(item) {
        item.active = false;
      });
       item.active = true;
      $state.go(item.route);

    };
  }
])
