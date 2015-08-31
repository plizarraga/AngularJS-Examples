var app = angular.module("MyApp",["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider
    .when("/",{
      controller: "ReposController",
      templateUrl: "templates/home.html"
    })
    .when("/repo/:name",{
      controller: "RepoController",
      templateUrl: "templates/repo.html"
    })
    .otherwise("/");
});
