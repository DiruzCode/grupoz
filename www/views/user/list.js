app.controller('userList', [
  '$scope','$Api',
  function($scope, $Api) {
        $scope.userList = [];

        var init = function(){
            $Api.GET('user').then(function(result) {
                $scope.userList = result.data;
                console.log(result);
            });
        }

        init();

  }
])
