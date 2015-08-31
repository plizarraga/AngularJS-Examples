var app = angular.module("MyApp",[]);

app.directive("myAutocomplete",function(){
  function link(scope, element, attrs){
    console.log(scope.$eval(attrs.myAutocomplete))
    $(element).autocomplete({
      source: scope.$eval(attrs.myAutocomplete),
      select: function(ev, ui){
        ev.preventDefault();
        if(ui.item){
          scope.optionSelected(ui.item.value);
        }
      },
      focus: function(ev, ui){
        ev.preventDefault();
        $(this).val(ui.item.label);
      }
    });
  };
  return {
    link: link
  };
})

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
