(function(){

 var app = angular.module('app', ['ionic', 'ionic-timepicker']);

app.config(function($stateProvider, $urlRouterProvider){

  $stateProvider.state('addTimeEntry',{

      url:'/addTimeEntry',
      templateUrl: 'templates/addTimeEntry.html' 
  });

  $stateProvider.state('TimeEntryHistory',{

      url:'/TimeEntryHistory',
      views:{
        'tab-TimeEntryHistory':{
          templateUrl: 'templates/TimeEntryHistory.html'
        },
        controller:'TimeEntriesCtrl'
      }
  });

 $stateProvider.state('timeEntryDetails',{
      url:'/timeEntryDetails/:timeEntryId',
      views:{
        'tab-TimeEntryHistory':{
          templateUrl: 'templates/timeEntryDetails.html'
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

var  timeEntries = [

    {
      Id:'0',
      Date:'1 Jan 2016',
      Project:'First Project',
      WorkTime:'3',
      Comment:'123'

    },
    {
      Id:'1',
      Date:'2 Jan 2016',
      Project:'Second Project',
      WorkTime:'3',
      Comment:'123'

    },
    {
      Id:'2',
      Date:'3 Jan 2016',
      Project:'Third Project',
      WorkTime:'3',
      Comment:'123'

    }
  ];

  function getTimeEntry(timeEntryId){
      for(var i = 0; i < timeEntries.length; i++){
        if(timeEntries[i].Id == timeEntryId){
          return timeEntries[i];
        }
      }
      return undefined;
  }

app.controller('TimeEntriesCtrl', function($scope){

  $scope.timeEntries = timeEntries;
});

app.controller('TimeEntryDetailsCtrl', function($scope, $state){

  $scope.timeEntry = getTimeEntry($state.params.timeEntryId);
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


