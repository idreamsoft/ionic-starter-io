// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', [
  'ionic',
  'ionic.service.core',
  'ionic.service.push',
  'starter.controllers',
  'starter.services'
])

// Identify App
.config(['$ionicAppProvider', function($ionicAppProvider) {
  // Identify app
  $ionicAppProvider.identify({
    // The App ID (from apps.ionic.io) for the server
    app_id: '54317616',
    // The public API key all services will use for this app
    api_key: '4177f5eda12aa203f540a4da49cbb0db8deca9b145cf1e73',
    // The GCM project ID (project number) from your Google Developer Console (un-comment if used)
    // gcm_id: 'YOUR_GCM_ID'
  });
}])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('tab.user', {
    url: '/user',
    views: {
      'tab-user': {
        templateUrl: 'templates/tab-user.html',
        controller: 'UserCtrl'
      }
    }
  })

  .state('tab.push', {
    url: '/push',
    views: {
      'tab-push': {
        templateUrl: 'templates/tab-push.html',
        controller: 'PushCtrl'
      }
    }
  })

  .state('tab.deploy', {
    url: '/deploy',
    views: {
      'tab-deploy': {
        templateUrl: 'templates/tab-deploy.html',
        controller: 'DeployCtrl'
      }
    }
  })

  .state('tab.analytics', {
    url: '/analytics',
    views: {
      'tab-analytics': {
        templateUrl: 'templates/tab-analytics.html',
        controller: 'AnalyticsCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});