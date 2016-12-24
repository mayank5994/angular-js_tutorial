(function () {
  'use strict';

  angular.module("LunchCheck", [])

  .controller('LunchFormController', LunchFormController);

  LunchFormController.$inject = ['$scope'];
  function LunchFormController($scope) {
    $scope.lunches = "";
    $scope.message = "";
    $scope.customStyle = "";

    $scope.displayMessage = function () {
      var count = countLunches($scope.lunches);
      if (!count) {
        $scope.message = "Please enter data first";
        $scope.customStyle = {'color': 'red', 'border':'1px solid red'};
      } else {
        if (count && count <= 3) {
          $scope.message = "Enjoy!";
        }

        else if (count > 3) {
          $scope.message = "Too much!";
        }

        $scope.customStyle = {'color': 'green', 'border':'1px solid green'};
      }
    };

    var countLunches = function (str) {
      if(str.length === 0) return 0;
      var lunchArray = str.split(',');
      return lunchArray.length;
    };
  }

})();
