angular.module('aboutus')
.controller('AboutUsController',['$scope','AboutUsService',AboutUsController]);

function AboutUsController($scope,AboutUsService){
	$scope.list = [];
	$scope.loadAboutUs = function(){
		AboutUsService.list()
		.then(function(data){
			$scope.list = data;
			},
			function(err){}
		);
	};

	$scope.loadAboutUs();
}