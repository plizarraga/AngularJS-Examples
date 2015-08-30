var app = angular.module("MyFirstApp",[]);

app.controller("MyFirstController",function($scope, $http){
  $scope.posts = [];
  $scope.newPost = {};

  $http.get("http://jsonplaceholder.typicode.com/posts")
    .success(function(data){
      $scope.posts = data;
    })
    .error(function(err){
      console.log(err)
    });

  $scope.addPost = function(){
    $http.post("http://jsonplaceholder.typicode.com/posts",{
      title: $scope.newPost.title,
      body: $scope.newPost.body,
      userId: 1
    })
      .success(function(data, status, headers, config){
        $scope.posts.push(data);
        $scope.newPost = {};
      })
      .error(function(err, status, headers, config){
        console.log(err)
      });
  };
});
