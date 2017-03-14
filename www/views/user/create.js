app.controller('userCreate', [
  '$scope','$Api','Camera',
  function($scope, $Api, Camera) {
        $scope.images = [];
        $scope.actionCreate = function(){

            $Api.POST('user',$scope.model).then(function(result) {
                console.log(result);
            });
        };


        $scope.takePicture = function() {

                Camera.takePicture().then(function(image) {

                  var push = {
                    image: image
                  };
                  $scope.images.push(push);
                }, function(err) {

                  $ionicLoading.show({
                    template: 'No se pudo tomar la foto',
                    duration: 3000
                  });
                  $log.error(err);

                });

        };

        $scope.removeImage = function(index) {
            $scope.images.splice(index, 1);
        };

  }
])
