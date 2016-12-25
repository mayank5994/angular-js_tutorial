(function () {
  'use strict';

  angular.module("LunchCheck", [])

  .controller('Controller',Controller);

  Controller.$inject = ['$scope'];
  function Controller($scope) {
    $scope.lunch = "";
    $scope.message = "";
    $scope.style1 = "";
    $scope.style2="";

    $scope.displayMessage = function () {
      var count = countLunches($scope.lunch);
      if (!count) {
        $scope.message = "Please enter data first";
        $scope.style1 = {'color': 'red'};
        $scope.style2 = {'border':'1px solid red'};
      } else {
        if (count && count <= 3) {
          $scope.message = "Enjoy!";
        }

        else if (count > 3) {
          $scope.message = "Too much!";
        }

        $scope.style1 = {'color': 'green'};
        $scope.style2 = {'border':'1px solid green'};
      }
    };

    var countLunches = function (str) {
      if(str.length === 0) return 0;
      var lunchArray = str.split(',');
      return lunchArray.length;
    };
  }

})();
