$(document).ready(function(){
	// $(".dropdown").on("click",function(){
	// 	$(".dropdown-content").toggle(4000);
	// });
	$(".login").on("click",function(){
		$(".log").toggle(2000);
	});
	$(".dropbutton").on("click",function() {
		$(".news").toggle(1000);
	});
	$(".dropBtn").on("click",function(){
		$(".achive").toggle(1000);
	});
	
});

var app = angular.module("myApp", []);
app.directive("w3TestDirective", function() {
    return {
        restrict : "A",
        templateUrl : "template/employee.html"
    };
});

var app = angular.module("myApp",["ngRoute"])
app.config(function($routeProvider) {
  $routeProvider
  .when("/Contact Us", {
    templateUrl : "template/contact.html"
  })
  .when("/Employee", {
    templateUrl : "template/employee.html"
  })
  .when("/Company", {
    templateUrl : "template/comapny.html"
  })
  .when("/Service", {
    templateUrl : "template/service.html"
  });
});
