app
.controller('LogoutController', [
  '$scope',
  '$state',
  function($scope, $state) {

      $scope.dashboard = "";

      var init = function(){

          localStorage.removeItem("sugal_profile_technician_id");
          localStorage.removeItem("sugal_profile_name");
          $state.go('login');
      }

      init();
  }
]);
