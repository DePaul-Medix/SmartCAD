var myApp = angular.module('myApp',[]);

myApp.controller("mainController", function($scope, $http) {
  $http.get('C:/Users/lqdev_000/Documents/Development/SmartCAD/data.json').
    success(function(data, status, headers, config) {
      $scope.info = data;
	  console.log(data)
    }).
    error(function(data, status, headers, config) {
      // log error
    });
});

/*
myApp.controller('mainController',function($scope,$http){
	$scope.name = "Luis"
	
	$http.get('C:/Users/lqdev_000/Documents/Development/SmartCAD/data.json').
		success(function(data,status,headers,config){
			$scope.data = data;
			console.log(data);
			
			var first = data[0];
			console.log(first);
			var metadata = first['metadata'];
			console.log(metadata);
			$scope.bodyPartExamined = metadata['BodyPartExamined'];
			console.log($scope.bodyPartExamined)
			
		}).
		error(function(data,status,headers,config){
			alert("ERROR!")
		});
	
	$scope.bodyPartExamined = metadata['BodyPartExamined'];
});
*/