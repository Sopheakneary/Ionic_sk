var app =angular.module('starter.controllers', [])
app.controller('LoginCtrl', function($scope, $state) {
	$scope.user = {
	email: null,
	pass: null
	}
	$scope.signIn = function(email,pass) {
		$scope.email = $scope.user.email;
		$scope.pass = $scope.user.pass;
		// alert($scope.email);
	$state.go('tab.dash');
};
$scope.bringToRegister = function() {
	$state.go('register');
};
});
//Register controll ================================
app.controller('registerCtrl', function($scope,$http,$state) {
	$scope.user = {
	name: null,
	email: null,
	pass: null
	}
	$scope.register = function(name,email,pass) {
		$scope.name = $scope.register.name;
		$scope.email = $scope.register.email;
		$scope.pass = $scope.register.pass;
		$http.post("templates/register.php",{'name':$scope.name,'email':$scope.email,'pass':$scope.pass})
		.success(function(data, status, headers, config){
			console.log("data inserted");
		})
		// $state.go('tab.dash');
	}

});