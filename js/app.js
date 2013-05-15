angular.module('stupscataloge', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/stups', {templateUrl: 'partials/stups-list.html',   controller: StubsListCtrl}).
      when('/stups/:phoneId', {templateUrl: 'partials/stup-detail.html', controller: StubsDetCtrl}).
      when('/404', {templateUrl: 'partials/error.html', controller: ErrorCtrl}).
      otherwise({redirectTo: '/stups'});
}]);