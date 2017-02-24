app.controller('layout', [
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
        route: "app.userList",
        icon: "ion-chevron-right",
        label: "Listar Usuario"
      }, {
        route: "app.userCreate",
        icon: "ion-chevron-right",
        label: "Crear nuevo usuario"
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
