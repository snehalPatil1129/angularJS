
angular.module("app").service('Calculator', function () {
    this.square = function (a) { return a*a};
    this.cube = function (a) { return a*a*a};
    this.factorial1=   function factorial1(num) {   
    if (num < 0) {
       return -1;
    }
        else if (num == 0) {
        return 1;
    }
       else {
       return (num * factorial1(num - 1));
 }

     };
    
});

    angular.module("app").controller('ass2Controller', function ($scope, Calculator) {

    $scope.findSquare = function () {
        $scope.answer = Calculator.square($scope.number);
     }
     $scope.findCube = function () {
        $scope.answer = Calculator.cube($scope.number);
     }
     $scope.findFactorial= function(){
         $scope.answer =Calculator.factorial1($scope.number);
     }
});