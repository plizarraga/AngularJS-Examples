var app = angular.module("ToDoList",["LocalStorageModule"]);

app.controller("ToDoController",function($scope, localStorageService){
  if(localStorageService.get("angular-todo-list")){
    $scope.todo = localStorageService.get("angular-todo-list");
  }
  else{
    $scope.todo = [];

  }
  $scope.newActv = {}

  // {
  //   descripcion: "Terminar el curso de AngularJS"
  //   fecha: "28-08-2015"
  // }
  $scope.$watchCollection("todo",function(newvalue, oldValue){
    localStorageService.set("angular-todo-list", $scope.todo)
  });

  $scope.addActv = function(){
    $scope.todo.push($scope.newActv);
    $scope.newActv = {};
  };

  $scope.clear = function(){
    $scope.todo = [];
  };
});
