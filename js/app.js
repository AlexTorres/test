angular.module('stupscataloge',[]).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  		when('/stups', {templateURL: 'partials/stups-list.html', controller: StubsListCtrl}).
  		when('/stup/:phoneId', {templateURL: 'partials/stup-list.html', controller: StubsDetCtrl}).
  		otherwise({redirectTo: '/stups'});
  }]);