/*global todomvc */
'use strict';

/**
 * The main controller for the app. The controller:
 * - retrieves and persists the model via the todoStorage service
 * - exposes the model to the template and provides event handlers
 */
todomvc.controller('TodoCtrl', function TodoCtrl($scope, $location,TodoList,CurrentTodo) {
	
	$scope.todoList = TodoList;
	$scope.currentTodo = CurrentTodo;
		
	if ($location.path() === '') {
		$location.path('/');
	}

	$scope.location = $location;

	$scope.$watch('location.path()', function (path) {
	
		$scope.statusFilter = { '/active': {completed: false}, '/completed': {completed: true} }[path];
	});

	
});
