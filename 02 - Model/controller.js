var app = angular.module("MyFirstApp",[]);

app.controller("MyFirstController",function($scope){
  $scope.nombre = "Jimi Hendrix";
  $scope.nuevoComentario = {};
  $scope.comentarios =[
    {
      comentario: "Primer comentario",
      username: "Eddie Van Halen"
    },
    {
      comentario: "Segundo comentario",
      username: "Jim Morrison"
    }
  ];
  $scope.agregarComentario = function(){
    $scope.comentarios.push($scope.nuevoComentario);
    $scope.nuevoComentario = {};
  };
});
