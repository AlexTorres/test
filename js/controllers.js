function StubsListCtrl ($scope, $http) {
	$http.get('stubs/phones.json').success(function (data){
		$scope.stubs = data;
	});

}

function StubsDetCtrl($scope, $routeParams, $http) {
  $http.get('stubs/' + $routeParams.stubId + '.json').success(function(data) {
    $scope.stub = data;
    $scope.mainImageUrl = data.images[0];
  });
   $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }
}

function ErrorCtrl($scope) {
  $scope = '404';
}

