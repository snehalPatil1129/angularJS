var app = angular.module("app", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider 
    .when("/assignmnt1", {
        templateUrl : "assignmnt1.html" 
        
    })
    .when("/assignmnt2", {
        templateUrl : "assignmnt2.html",
        controller : "ass2Controller"
    })
    .when("/assignmnt3", {
        templateUrl : "assignmnt3.html",
        controller :"ass3Controller"
    })
    .when("/assignmnt4", {
        templateUrl : "assignmnt4.html"
    })
    .when("/assignmnt5", {
        templateUrl : "assignmnt5.html",
        controller : "ass5Controller"
    })
    .when("/assignmnt6", {
        templateUrl : "assignmnt6.html",
        controller : "ass6Controller"
    })
    .otherwise({redirectTo:'/assignmnt1'
})
    });
