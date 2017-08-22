// var app = angular.module("app", []);
angular.module("app").controller("ass6Controller", function ($scope) {
    $scope.names = [{
        name: "Book",
        price: "50"
    },
     {
        name: "Pen",
        price: "50"
    },
    {
        name: "Sketch Pens",
        price: "150"
    },
    {
        name: "Shoes",
        price: "500"
    },
    {
        name: "Eraser",
        price: "30"
    },
     {
        name: "Bag",
        price: "350"
    }];
    $scope.selectedItems = [];
    $scope.value = function (isSelected, item) {
        if (isSelected == true) {
            $scope.selectedItems.push(item);
        } else {
            console.log(item.name);
            angular.forEach($scope.selectedItems, function (itemRmv, $index) {
                if (itemRmv.name == item.name) {
                    $scope.selectedItems.splice($index, 1);
                }
            })
        }
    }
});

angular.module("app").filter('getprice', function () {
    return function (value, property) {
        var total = 0;
        angular.forEach(value, function (val, index) {
            total = total + parseInt(val.price)
        });
        return total;
    }
});
    