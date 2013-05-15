function StubsListCtrl ($scope, $http) {
	$http.get('stubs/phones.json').success(function (data){
		$scope.stubs = data;
	});

}

function StubsDetCtrl($scope, $routeParams, $http) {
  $http.get('stubs/' + $routeParams.stubId + '.json').success(function(data) {
    $scope.stub = data;
  });
}

function ErrorCtrl($scope) {
  $scope = '404';
}

