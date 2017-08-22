     angular.module("app").controller('ass5Controller' ,function ($scope ) {
            $scope.displayArray = [];
            $scope.userData = {};
            $scope.submitForm = function(isValid)
            {
                if(isValid){
                $scope.displayArray.push($scope.userData.firstName);
                $scope.displayArray.push($scope.userData.lastName);
                $scope.displayArray.push($scope.userData.email);
                $scope.displayArray.push($scope.userData.phoneNumber);
                $scope.displayArray.push($scope.userData.gender);
                $scope.displayArray.push($scope.userData.location);

            }
            console.log($scope.displayArray);
    };

    $scope.reset = function() {
    $scope.displayArray = {};
};

});