var app = angular.module("MyApp");

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
