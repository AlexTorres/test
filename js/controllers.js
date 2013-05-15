function StubsListCtrl ($scope, $http) {
	$http.get('stubs/phones.json').success(function (data){
		$scope.stubs = data;
	});

}

function StubsDetCtrl($scope, $routeParams) {
  $scope.stubId = $routeParams.stubId;
}

function ErrorCtrl($scope) {
  $scope = '404';
}