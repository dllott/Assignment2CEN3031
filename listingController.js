angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.ent = {};
    $scope.addListing = function(index) {
    	$scope.listings.push(index);
    	$scope.ent = {};
    };
    $scope.deleteListing = function(index) {
    	var i = $scope.listings.indexOf(index);
    	$scope.listings.splice(i, 1);
    };
    $scope.showDetails = function(index) {
    	$scope.selected = index;
    };
  }
]);