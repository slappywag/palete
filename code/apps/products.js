(function () {

  'use strict';

	var module = angular.module('app');

	module.controller('ProductCtrl', function ($scope, $data) {

		// ---------------------------
		//			 setup
		// ---------------------------
		$scope.data = $data.data;
		$scope.altText = $scope.data.altText;

	});

}) ();