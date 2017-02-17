// Code goes here
angular.module('myApp', [])
  .controller('myCtrl', function($scope) {
    $scope.text1 = 'John:2 \nJane:3 \nJohn:4 \nJane:5 \nJaaJ:8 \n jaaJ:9\n Jass  123saj.:18';
    $scope.arr = [];
    $scope.getCount = function(text1) {
      $scope.arr = [];
      var text2 = text1.split('\n').filter(e => e !== '').map(e => e.trim());
      console.log(text2);
      for (var i = 0; i < text2.length; i++) {
        var text3 = text2[i].split(":");
        var obj = $scope.arr.find(e => e.name === text3[0]);
        if (obj) {
          obj.value += parseInt(text3[1]);
        } else {
          var o = {
            'name': text3[0],
            'value': parseInt(text3[1])
          };
          if (checkPalindorme(text3[0])) o.isPalin = true;
          $scope.arr.push(o);
        }
      }
    };
  });

function checkPalindorme(str) {
  var len = Math.floor(str.length / 2);
  str = str.match(/[A-Za-z]/gi).join("").toLowerCase();
  for (var i = 0; i < len; i++)
    if (str[i] !== str[str.length - i - 1])
      return false;
  return true;
}