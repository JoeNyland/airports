var airportsApp = angular.module('airportsApp', []);

airportsApp.controller('ApplicationCtrl', function ($scope, $http) {
  $scope.airports = [];
  $http.get('countries.json').success(function (data) {
    angular.forEach(data, function (value) {
      $http.get('./countries/'+value+'.json').success(function (data) {
        angular.forEach(data, function (airport) {
          $scope.airports.push(airport);
        });
        $scope.airport_properties = Object.keys($scope.airports[0]);
      })
    });
  });
});
