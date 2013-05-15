function StubsListCtrl ($scope, $http) {
	$http.get('stubs/phones.json').success(function (data){
		$scope.stubs = data;
	});

}

function StubsDetCtrl($scope, $routeParams) {
  $scope.phoneId = $routeParams.phoneId;
}

function ErrorCtrl($scope) {
  $scope = '404';
}