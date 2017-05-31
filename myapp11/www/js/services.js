var app = angular.module('ionium.services', []);

app.service('commanService', function($http,$ionicPopup,$state,$ionicLoading) {

// alert(window.global.ServicePath);
var service={};



// if($state.current.name!="login")
// {
//   var getLocalValue=sessionStorage.getItem('userInfo')
//     if(typeof(getLocalValue)=="string")
//     {
//       $state.go('login');
//       return false;

//     }
    
// }


service.isCheckUserLogin=function(){
 var getLocalValue=sessionStorage.getItem('userInfo');

 if(typeof(getLocalValue)!="string")
    {
      $state.go('login');
    

    }
    else
    {
      getLocalValue=JSON.parse(getLocalValue);

      return getLocalValue;

    }






}
service.showLoadingIndicator=function(){
         $ionicLoading.show({
        template: 'Loading...'

        });
    };




    service.hideLoadingIndicator=function()
    {
        $ionicLoading.hide()


    }


service.httpRequestCommon=function(postData,callback){
          // postData=JSON.stringify(postData);
          $http({
             method: 'POST',
             url: window.global.ServicePath,
           transformRequest: angular.identity,
       headers: {'Content-Type': undefined},
       data:postData,
       dataType: 'json',
            }).success(function(response) {
                callback(response);
            })



        };



    service.showMessage=function(message){

            var alertPopup = $ionicPopup.alert({
         title: 'Message',
         template: message
       });

    }; 




return service;
  // return {
  //   getMenuById: getMenuById,
  //   getAllMenu : getAllMenu
  // };
});
