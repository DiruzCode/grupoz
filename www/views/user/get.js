app.controller('user', [
  '$scope','$Api', '$stateParams',
  function($scope, $Api, $stateParams) {
        $scope.user = [];
        var init = function(){
            $Api.GET('user/'+$stateParams.id).then(function(result) {
                $scope.user = result.data[0];
                console.log(result);
            })
        }

        init();

  }
])
