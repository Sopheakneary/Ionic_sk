angular.module('starter.controllers', [])
.controller('LoginCtrl', function($scope, $state) {
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
//Register controll =================================

