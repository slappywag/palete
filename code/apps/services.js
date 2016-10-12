(function () {

  'use strict';

	var module = angular.module('app');

	module.controller('ServiceCtrl', function ($scope, $data) {

		// ---------------------------
		//			 setup
		// ---------------------------
		
		$scope.data = $data.data;

	});

}) ();