window.global = {
  Backand_AppName :'xxxxxxxxxx',
  Backand_Token   :'xxxxxxxxxx', // FROM Backand->Security & Auth->Configuration

  Facebook_APP_ID :'433729700305161', // Get this from https://developers.facebook.com
  Google_OAUTH_ID :'706736973541-6ijblvjpmcldeple1kbrpeh5qvcjf5jo.apps.googleusercontent.com', // Get this from https://console.developers.google.com

  GCM_SENDER_ID   :'212520107122', // Get this from https://console.developers.google.com
  GCM_SERVER_KEY  :'AIzaSyDXU3wyKXzRsFS03vqnAEpQzclXG4HKaUs', // Get this from https://console.developers.google.com

  Admob_Unit_ID   :'xxxxxxxxxx',

  ServicePath:'http://52.35.160.59/ecommerce/'
}

angular.module('ionium', ['ionic', 'topscroller', 'ngCordova', 'ngCordovaOauth', 'ionium.controllers', 'ionium.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

      document.addEventListener("deviceready", function(){
//        var push = PushNotification.init({
//            android: {
//                senderID: window.global.GCM_SENDER_ID
//            },
//            ios: {
//                alert: "true",
//                badge: "true",
//                sound: "true"
//            },
//            windows: {}
//        });

//        push.on('registration', function(x) {
//          console.log(x.registrationId);
//          BackandService.read('push').then(function(y){
//            //console.log(y);
//            if(y.data.totalRows==0){
//              var data = {
//                device_id: x.registrationId,
//                platform: ionic.Platform.platform()
//              };
//              BackandService.create('push', data).then(function(z) {
//                //console.log(z);
//              });
//            }
//            else{
//              for(var i in y.data.data){
//                if(y.data.data[i].device_id != x.registrationId){
//                  var data = {
//                    device_id: x.registrationId,
//                    platform: ionic.Platform.platform()
//                  };
//                  BackandService.create('push', data).then(function(z) {
//                    //console.log(z);
//                  });
//                  break;
//                }
//              }
//            }
//          }, function(err){
//            console.log(err);
//          });
//        });

//        push.on('notification', function(data) {
//          alert(JSON.stringify(data));
//          alert(data.message);
//        });
//
//        push.on('error', function(e) {
//            console.log(err);
//        });

      }, false);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  // BackandProvider.setAppName(window.global.Backand_AppName);
  // BackandProvider.setAnonymousToken(window.global.Backand_Token);

  $ionicConfigProvider.backButton.text('');
  $ionicConfigProvider.backButton.previousTitleText(false);
  $ionicConfigProvider.backButton.icon('ion-android-arrow-back');

  // $stateProvider.state('app', {
  //   url: '/app',
  //   abstract: true,
  //   templateUrl: 'templates/themes/menu.html',
  //   controller: 'AppCtrl'
  // })

  // HOME

  // .state('app.dash', {
  //     url: '/dash',
  //     views: {
  //       'menuContent': {
  //         templateUrl: 'templates/themes/dashboard.html'
  //       }
  //     }
  //   })


     $stateProvider.state('learn_main', {
    url: '/learn_main',
    templateUrl: 'templates/ecommerce_main/index.html',
    controller:"signupController"


  })

     .state('learn_screen1', {
    url: '/learn_screen1',
    templateUrl: 'templates/ecommerce_learn/screen1.html',
    controller:"signupController"


  })
     .state('learn_screen2', {
    url: '/learn_screen2',
    templateUrl: 'templates/ecommerce_learn/screen2.html',
    controller:"signupController"


  })
     .state('learn_screen3', {
    url: '/learn_screen3',
    templateUrl: 'templates/ecommerce_learn/screen3.html',
    controller:"signupController"


  })
     .state('learn_screen4', {
    url: '/learn_screen4',
    templateUrl: 'templates/ecommerce_learn/screen4.html',
    controller:"signupController"


  })
.state('learn_screen5', {
    url: '/learn_screen5',
    templateUrl: 'templates/ecommerce_learn/screen5.html',
    controller:"signupController"


  })

.state('signup', {
    url: '/signup',
    templateUrl: 'templates/ecommerce_learn/signup.html',
    controller:"signupController"

  })
.state('main', {
    url: '/main',
    cache: false,
    templateUrl: 'templates/ecommerce_dashboard/main.html',
    controller:"signupController"



  })

.state('myaccount', {
    url: '/myaccount',
    cache: false,
    templateUrl: 'templates/ecommerce_myaccount/myaccount.html',


  })



.state('myaccount_setting', {
    url: '/myaccount_setting',
    cache: false,
    templateUrl: 'templates/ecommerce_myaccount/myaccount_setting.html',


  })


.state('myaccount_info', {
    url: '/myaccount_info',
    cache: false,
    templateUrl: 'templates/ecommerce_myaccount/myaccount_info.html',


  })

.state('login', {
    url: '/login',
    cache: false,
    templateUrl: 'templates/ecommerce_login/login.html',
    controller: 'signupController'


  })
.state('complete_lesson', {
    url: '/complete_lesson',
    cache: false,
    templateUrl: 'templates/ecommerce_complete_lesson/complete_lesson.html',
     controller: 'complete_lesson_controller'


  })
.state('create_lesson', {
    url: '/create_lesson',
    cache: false,
    templateUrl: 'templates/ecommerce_create_lesson/create_lesson.html',
    controller:'create_lesson_controller'


  })

.state('ask_lesson', {
    url: '/ask_lesson',
    cache: false,
    templateUrl: 'templates/ecommerce_ask_lesson/ask_lesson.html',



  })
.state('search_lesson', {
    url: '/search_lesson',
    cache: false,
    templateUrl: 'templates/ecommerce_search_lesson/search_lesson.html',

    controller:'search_lesson_info_controller'

  })


  .state('search_lesson_info', {
    url: '/search_lesson_info',
    cache: false,
    templateUrl: 'templates/ecommerce_search_lesson/search_lesson_info.html',
    controller: 'search_lesson_info_controller'



  })


  .state('search_other_lesson', {
    url: '/search_other_lesson',
    cache: false,
    templateUrl: 'templates/ecommerce_search_lesson/search_other_lesson.html',

  })















     // screen1.html


  // .state('app.motionlist', {
  //   cache: false,
  //   url: '/material/motion',
  //   views: {
  //     'menuContent': {
  //       templateUrl: 'templates/material/motion.html',
  //       controller: 'MotionCtrl'
  //     }
  //   }
  // });;

  $urlRouterProvider.otherwise('/learn_main');
})




// It is used to convert datetime into time ago format

moment.locale('en', {
    relativeTime : {
        future: " %s",
        past:   "%s",
        s:  "1s",
        m:  "1m",
        mm: "%dm",
        h:  "1h",
        hh: "%dh",
        d:  "1d",
        dd: "%dd",
        M:  "1m",
        MM: "%dm",
        y:  "1y",
        yy: "%dy"
    }
});
