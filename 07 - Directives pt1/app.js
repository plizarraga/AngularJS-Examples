var app = angular.module("MyApp",[]);

app.directive("backImg", function(){
  return function(scope, element, attrs){
    attrs.$observe("backImg", function(value){
      element.css({
        "background": "url("+value+")",
        "background-size": "cover",
        "background-position": "center"
      });
    });
  }
})

app.controller("AppCtrl", function($scope, $http){
  $http.get("https://api.github.com/users/plizarraga/repos")
    .success(function(data){
      $scope.repos = data;
    })
    .error(function(error){
      console.log(error)
    });
});
