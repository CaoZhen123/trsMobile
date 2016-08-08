(function(){

 var app = angular.module('app', ['ionic']);

app.config(function($stateProvider, $urlRouterProvider){

  $stateProvider.state('addTimeEntry',{

      url:'/addTimeEntry',
      views:{
        'tab-addTimeEntry':{
          templateUrl: 'templates/addTimeEntry.html'
        }
      }   
  });

  $stateProvider.state('TimeEntryHistory',{

      url:'/TimeEntryHistory',
      views:{
        'tab-TimeEntryHistory':{
          templateUrl: 'templates/TimeEntryHistory.html'
        }
      }
  });

  $stateProvider.state('settings',{

      url:'/settings',
      views:{
        'tab-settings':{
          templateUrl: 'templates/settings.html'
        }
      }
  });

  $urlRouterProvider.otherwise('/TimeEntryHistory');
});
app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {

      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


}());


