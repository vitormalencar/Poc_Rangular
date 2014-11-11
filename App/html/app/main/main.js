'use strict';

/**
 * @ngdoc function
 * @name olimpoWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the olimpoWebApp
 */
 angular

 .module('olimpoWebApp.main',['ngRoute','ngResource'])

 .factory('MainService', function($resource){
 	return $resource('http://0.0.0.0:3000/api/v1/todos/:id', { id: '@_id' })
 })

 .config(['$routeProvider', function($routeProvider) {
 	$routeProvider.when('/main', {
 		templateUrl: 'main/main.html',
 		controller: 'MainCtrl'
 	});
 }])

 .controller('MainCtrl', ['$scope','MainService', function ($scope,MainService) {

 	$scope.todos = [];

 	$scope.setMainList = function() {
 		MainService
 		.query(function(data){
 			$scope.todos = data;
 		});
 	};

 	$scope.createTodo = function() {
 		var post = MainService.get({ id: 1 }, function() {
		post.titlea = "My new title";
		post.completed = false;
		post.created_at = Date.now();
		post.updated_at = Date.now();
		console.log(post);
		post.$save();
		});
 	};
 	$scope.createTodo()
 	$scope.setMainList();
 }]);

