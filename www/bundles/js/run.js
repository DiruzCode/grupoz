angular.module('App')
.run(function($ionicPlatform, $state) {
  $ionicPlatform.ready(function() {
    if (window.StatusBar) {
      StatusBar.styleLightContent();
    }

      $ionicPlatform.registerBackButtonAction(function (event) {
            navigator.app.backHistory();
      }, 100);

  });
});
