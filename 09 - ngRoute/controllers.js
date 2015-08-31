var app = angular.module("MyApp");

app.controller("ReposController", function($scope, $http){
  $scope.repos = [];

  $http.get("https://api.github.com/users/plizarraga/repos")
    .success(function(data){
      $scope.repositorios = data;
      for (var i = data.length - 1; i >= 0; i--) {
        var repo = data[i];
        $scope.repos.push(repo.name);
      };
    })
    .error(function(error){
      console.log(error)
    });

    $scope.optionSelected = function(data){
      $scope.$apply(function(){
        $scope.main_repo = data;
      })
    };
});

app.controller("RepoController", function($scope, $http, $routeParams){
  $scope.repo ={};
  $http.get("https://api.github.com/repos/plizarraga/"+$routeParams.name)
    .success(function(data){
      $scope.repo = data;      
    })
    .error(function(error){
      console.log(error)
    });
});
