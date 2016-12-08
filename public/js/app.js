(function (){

var app = angular.module("mainMod", ["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider.when("/about", {
    templateUrl:"views/about.html"
  }),
  $routeProvider.when("/searchresults", {
    templateUrl:"views/results.html",
    controller:"getSearchCtrl"
  }),
  $routeProvider.when("/place", {
    templateUrl:"views/place.html",
    controller:"businessCtrl"
  });
});

app.directive("resultView", function(){
  return {
    restrict: "E",
    templateUrl: "views/resultpartial.html",
    replace: false
  }
});

app.directive("businessForm", function(){
  return {
    restrict: "E",
    templateUrl: "views/formpartial.html",
    replace: false
  }
});







})();
