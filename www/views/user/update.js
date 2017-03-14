app.controller('userUpdate', [
  '$scope','$Api','$stateParams',
  function($scope, $Api, $stateParams) {
        $scope.model = [];
        console.log($stateParams);
        var init = function(){
            $Api.GET('user/'+$stateParams.id).then(function(result) {
                $scope.model = result.data[0];
                console.log(result);
            })
        }


        init();

  }
])
