var app = angular.module("ToDoList",["LocalStorageModule"]);

app.factory("ToDoService", function(localStorageService){
  var toDoService = {};
  toDoService.key = "angular-todo-list";

  if(toDoService.key){
    toDoService.todos = localStorageService.get(toDoService.key);
  }
  else{
    toDoService.todos = [];
  }

  toDoService.add = function(newToDo){
    toDoService.todos.push(newToDo);
    toDoService.updateLocalStorage();
  };

  toDoService.removeItem = function(item){
    toDoService.todos = toDoService.todos.filter(function(todo){
      return todo !== item;
    });
    toDoService.updateLocalStorage();
    return toDoService.getAll();
  };

  toDoService.getAll = function(){
    return toDoService.todos;
  };

  toDoService.removeAll = function(){
    toDoService.todos = [];
    toDoService.updateLocalStorage();
    return toDoService.getAll();
  };

  toDoService.updateLocalStorage = function(){
    localStorageService.set(toDoService.key, toDoService.todos)
  };
  return toDoService;
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
