angular.module('stupscataloge', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/stups', {templateUrl: 'partials/stups-list.html',   controller: StubsListCtrl}).
      when('/stups/:phoneId', {templateUrl: 'partials/phone-detail.html', controller: StubsDetCtrl}).
      otherwise({redirectTo: '/stups'});
}]);