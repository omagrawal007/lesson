
var app = angular.module('ionium.controllers', []);



app.controller('signupController',function($scope, $http, $state, $ionicModal, $timeout, $cordovaOauth,commanService){


$scope.user_info={};
$scope.checkit=function(){

	alert(11);
}

$scope.login=function(){


	var unserLogin = new FormData();
				 unserLogin.append("type","lesson_read");
				 unserLogin.append("requestmethod","signin");
				 unserLogin.append("email",$scope.user_info.email);
				 unserLogin.append("password",$scope.user_info.user_password);


				 commanService.httpRequestCommon(unserLogin,function(response){
					if(response.code==2000)
					{

						sessionStorage.setItem('userInfo',JSON.stringify(response.data));
						$state.go('main');
						return false;



					}
					else if(response.code==2001)
					{


						commanService.showMessage("Please Enter Correct Credentials");

					}
					else
					{

						commanService.showMessage("Please Fill full form");

					}


				});


 }


$scope.signup=function(){
	 			 var unserLogin = new FormData();
				 unserLogin.append("type","lesson_read");
				 unserLogin.append("requestmethod","sign_up");
				 unserLogin.append("email",$scope.user_info.e_name);
				 unserLogin.append("password",$scope.user_info.password);
				 unserLogin.append("f_name",$scope.user_info.f_name);
				 unserLogin.append("l_name",$scope.user_info.l_name);
				 unserLogin.append("n_name",$scope.user_info.n_name);
				 unserLogin.append("dob",$scope.user_info.dob);

				commanService.httpRequestCommon(unserLogin,function(response){
					console.log(response);


				});

}



	$scope.GPlogin = function(){
		$cordovaOauth.google(window.global.Google_OAUTH_ID, ["email profile"]).then(function(result) {
    console.log(result);

//		    displayData(result.access_token);
//		    $state.go("app.gpprofile", {}, {reload: true});
		}, function(error) {
		    console.log("Error -> " + error);
		});
	};
	$scope.FBlogin = function(){
		$cordovaOauth.facebook(window.global.Facebook_APP_ID, ["email", "public_profile", "user_hometown", "user_posts", "user_friends", "user_about_me"]).then(function(result) {
		    console.log(result)
		    // $state.go("app.fbprofile", {}, {reload: true});

		}, function(error) {
		    console.log("Error -> " + error);
		});
	}



});


app.controller('create_lesson_controller',function($scope,$rootScope,commanService,$ionicPlatform){

	$scope.lesson_info={};
	$scope.lesson_info.type="audio"
	var getLocalUserInfo=commanService.isCheckUserLogin();
	console.log(getLocalUserInfo);



$scope.uploadFile=function(mediaFile,callback) {
        var ft = new FileTransfer(),
            path = mediaFile.fullPath,
            name = mediaFile.name;
            ft.upload(path,"http://52.35.160.59/ecommerce/upload.php",function(result) {
                

                var getUrl=JSON.parse(result.response);
                callback(getUrl);
                


            },
            function(error) {
              alert("uploading fail")

            },
            { fileName: name,
            fileKey:'file',
             mimeType:"video/mp4"});
    }







	$scope.startLession=function(){


		alert($scope.lesson_info.lession_rate);
				 var lession_info = new FormData();
				 lession_info.append("type","lesson_read");
				 lession_info.append("requestmethod","create_lession");
				 lession_info.append("title_name",$scope.lesson_info.title_name);
				 lession_info.append("tag_name",$scope.lesson_info.tag_name);
				 lession_info.append("description",$scope.lesson_info.description);
				 lession_info.append("lessonPrice",$scope.lesson_info.lessonPrice);
				 lession_info.append("lession_rate",$scope.lesson_info.lession_rate);
				 lession_info.append("lesson_type",$scope.lesson_info.lesson_type);
				 lession_info.append("user_id",getLocalUserInfo.id);
				 




				 if($scope.lesson_info.lesson_type=="video")
				 {

				 	commanService.showLoadingIndicator();
				
					var options = { limit: 1 };
					$scope.videoUrl="";
					navigator.device.capture.captureVideo(function(success){
						lession_info.append("file_name",success[0].name);
						$scope.uploadFile(success[0],function(getUrl){


								$scope.videoUrl=getUrl.filePath;
                				$scope.$apply();
                				
                				commanService.httpRequestCommon(lession_info,function(response){
                					if(response.code==2000)
                					{
                						commanService.hideLoadingIndicator();
                						commanService.showMessage("success fully uploading");
                						
                					}
          							else
          							{
          								commanService.hideLoadingIndicator();

          								commanService.showMessage("Upload Fail");

          							}


            		        		console.log(response);
			                	});
                			});
                			// $scope.videoUrl=encodeURI(success[0].fullPath);
					}, function(error){
					console.log(error);
					}, options);


				 }
				 else
				 {
				 	 


				 	 // var options = { limit: 1 };
				 	 var options = { limit: 1, duration: 10 };
					$scope.videoUrl="";
					navigator.device.capture.captureAudio(function(success){
						lession_info.append("file_name",success[0].name);
						$scope.uploadFile(success[0],function(getUrl){


								$scope.videoUrl=getUrl.filePath;
                				$scope.$apply();
                				
                				commanService.httpRequestCommon(lession_info,function(response){
                					if(response.code==2000)
                					{
                						commanService.showMessage("success fully uploading");
                						
                					}
          							else
          							{

          								commanService.showMessage("Upload Fail");

          							}


            		        		console.log(response);
			                	});
                			});
                			// $scope.videoUrl=encodeURI(success[0].fullPath);
					}, function(error){
					console.log(error);
					}, options);



				 }




				      // commanService.httpRequestCommon(lession_info,function(response){
          //           console.log(response);
          //       });






	}

})
app.controller('search_lesson_info_controller',function($scope,$rootScope,$ionicPopover,$state,$ionicModal,$ionicModal,commanService){


	var getLocalUserInfo=commanService.isCheckUserLogin();



// checked='true'


$scope.isFilter=false;
$scope.filterBarShow=function(){
	if($scope.isFilter=='true')
	{
		$scope.isFilter='false';

	}
	else
	{

		$scope.isFilter='true';

	}










}
$scope.getLesson=function(){
	var unserLogin = new FormData();
				 unserLogin.append("type","lesson_read");
				 unserLogin.append("requestmethod","getLesson");
				 unserLogin.append("id",getLocalUserInfo.id);
				 $scope.getLessonList=[];
				 commanService.httpRequestCommon(unserLogin,function(response){


				 	
					if(response.code==2000)
					{

						// alert("Success");
						$scope.getLessonList=response.data;




				 	} 	
				 	else
				 	{

						commanService.showMessage("No Record Found. ");


				 	}


				});



	console.log(getLocalUserInfo);




}
$scope.confirm=0;
$scope.addcarvalue=0;
$scope.cardinfo=0;
$scope.add_credit_card=function(){

	$scope.addcarvalue=0;
	$scope.cardinfo=1;




}
$scope.confirm_payment_btn=function(){

	// alert(12)
	$scope.confirm=1;

}
$scope.addCard=function(){

$scope.confirm=0;
$scope.addcarvalue=1;


}

$scope.close_payement=function(){
	$scope.cardDetail=0;
}

$scope.cardDetail=0;
$scope.finalStep=function(){

	$scope.cardinfo=0;
	$scope.cardDetail=1;


}
$scope.cancel_payment=function()
{
			$scope.confirm=0;
			$scope.addcarvalue=0;
			$scope.cardinfo=0;

		$scope.confirm_payment.hide();
}


	$ionicPopover.fromTemplateUrl('templates/ecommerce_side_bar/confirm_payment.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.confirm_payment = popover;
  });







});
app.controller('complete_lesson_controller',function($scope,$ionicPopover,$state,$ionicModal,$ionicModal){

$ionicPopover.fromTemplateUrl('templates/ecommerce_side_bar/popover.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover;
  });








$ionicModal.fromTemplateUrl('templates/ecommerce_side_bar/complete_profile.html', {
			animation: 'slide-in-up',
			scope: $scope,
			}).then(function(modal) {
				// scope.()
			$scope.modal=modal;

			});




$scope.homepage=function(){


	$scope.popover.hide();
	$state.go("main");


}


$scope.showOtherLesson=function(){

	$scope.popover.hide();
	$state.go('search_other_lesson');



}
$scope.settingpage=function(){

	$scope.popover.hide();
	$state.go('myaccount');

}



	$scope.startClick=true;
	$scope.likeClick=function(startvalue){
		if(startvalue==true)
		{


				$scope.startClick=false;
		}
		else
		{
			$scope.startClick=true;
		}



	}



})

// This directive use to convert timestamp into time ago format
app.filter('ago', function() {
    return function(date) {
      return moment(date).fromNow();
    };
})

app.filter('trusted', function($sce){
	return function(url){
		return $sce.trustAsResourceUrl(url);
	}
})

app.controller('AppCtrl', function($scope, $ionicModal, $http, $timeout, $ionicSideMenuDelegate, $state, $cordovaOauth, DashList) {

	$scope.productSlides = [
		{id: 1, img: 'img/ecommerce/camera-new.jpg'},
		{id: 2, img: 'img/ecommerce/camera-old.jpg'},
		{id: 3, img: 'img/ecommerce/camera.jpg'}
	];

	$scope.mainmenu = DashList.getAllMenu();

	// Active INK Effect
	ionic.material.ink.displayEffect();
})

app.controller('DashListCtrl', function($scope, $stateParams, $ionicModal, $timeout, DashList) {
	$scope.data = DashList.getMenuById($stateParams.id);

    setTimeout(function() {
        ionic.material.motion.ripple();
    }, 500);

    // Active INK Effect
    ionic.material.ink.displayEffect();
});
