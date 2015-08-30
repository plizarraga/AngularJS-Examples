var app = angular.module("ToDoList",["LocalStorageModule"]);

app.service("ToDoService", function(localStorageService){
  this.key = "angular-todo-list";

  if(this.key){
    this.todos = localStorageService.get(this.key);
  }
  else{
    this.todos = [];
  }

  this.add = function(newToDo){
    this.todos.push(newToDo);
    this.updateLocalStorage();
  };

  this.removeItem = function(item){
    this.todos = this.todos.filter(function(todo){
      return todo !== item;
    });
    this.updateLocalStorage();
    return this.getAll();
  };

  this.getAll = function(){
    return this.todos;
  };

  this.removeAll = function(){
    this.todos = [];
    this.updateLocalStorage();
    return this.getAll();
  };

  this.updateLocalStorage = function(){
    localStorageService.set(this.key, this.todos)
  };
});

app.controller("ToDoController",function($scope, ToDoService){
  $scope.todos = ToDoService.getAll();
  $scope.newToDo = {};

  $scope.addToDo = function(){
    ToDoService.add($scope.newToDo);
    $scope.newToDo = {};
  };

  $scope.removeToDo = function(item){
    $scope.todos = ToDoService.removeItem(item);
  };

  $scope.clearAll = function(){
    $scope.todos = ToDoService.removeAll();
  };
});
