(function () {

  'use strict';

	var module = angular.module('app');

	module.controller('MainCtrl', function ($scope, $data) {

		// ---------------------------
		//			 setup
		// ---------------------------

		$scope.data = $data.data;
		$scope.altText = $scope.data.altText;

		$scope.array = new Array(12);

	});

}) ();