function StubsListCtrl ($scope, $http) {
	$http.get('stubs/phones.json').success(function (data){
		$scope.stubs = data;
	});

}