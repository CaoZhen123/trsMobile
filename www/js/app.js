(function(){

 var app = angular.module('app', ['ionic', 'ionic-timepicker']);

app.config(function($stateProvider, $urlRouterProvider){

  $stateProvider.state('addTimeEntry',{

      url:'/addTimeEntry',
      views:{
        'tab-TimeEntryHistory':{
          templateUrl: 'templates/timeEntryDetails.html',
          controller:"AddTimeEntryCtrl"
        }
      },
  });

  $stateProvider.state('TimeEntryHistory',{

      url:'/TimeEntryHistory',
      views:{
        'tab-TimeEntryHistory':{
          templateUrl: 'templates/TimeEntryHistory.html',
          controller:'TimeEntriesCtrl'
        }
      }
  });

 $stateProvider.state('timeEntryDetails',{
      url:'/timeEntryDetails/:timeEntryId',
      views:{
        'tab-TimeEntryHistory':{
          templateUrl: 'templates/timeEntryDetails.html',
          controller:"TimeEntryDetailsCtrl"
        }
        
      },
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

var  timeEntries = [];

  function getTimeEntry(timeEntryId){
      for(var i = 0; i < timeEntries.length; i++){
        if(timeEntries[i].Id == timeEntryId){
          return timeEntries[i];
        }
      }
      return undefined;
  }

  function updateTimeEntry(timeEntry){
      for(var i = 0; i < timeEntries.length; i++){
        if(timeEntries[i].Id == timeEntry.Id){
          timeEntries[i] = timeEntry;
          return;
        }
      }
      return undefined;
  }

  function createTimeEntry(timeEntry){

    timeEntries.push(timeEntry);
  }

app.controller('TimeEntriesCtrl', function($scope){

  $scope.timeEntries = timeEntries;
});

app.controller('TimeEntryDetailsCtrl', function($scope, $state){

  $scope.timeEntry = angular.copy(getTimeEntry($state.params.timeEntryId));

  $scope.save = function(){
    updateTimeEntry($scope.timeEntry);
    $state.go('TimeEntryHistory');
  }
});

app.controller('AddTimeEntryCtrl', function($scope, $state){

  $scope.timeEntry = {

      Id:'',
      Date:'',
      Project:'',
      WorkTime:'',
      Comment:''  
    };

  $scope.save = function(){
    createTimeEntry($scope.timeEntry);
    $state.go('TimeEntryHistory');
  }
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
});

}());


