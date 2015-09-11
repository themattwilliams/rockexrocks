app.controller('RegExController', ["$scope", "$location", "$routeParams", function($scope, $location, $routeParams){
   $scope.changeView = function (view) {
      $location.path(view)
   }

   var puzzleOne = {
      title: "In The Beginning", difficulty: 1, attempted: false, completed: false, 
      description: "The ^ character in a RegEx matches the beginning of a string. The \w means match any word. Taken together, what should happen? Type /^\w/ to find out.",
      stringToSearch: "The rain in spain falls mainly on the plain",
      regEx: "/^\w/",
      id: 1
   }

   var puzzleTwo = {
      title: "The Whole Word", difficulty: 1, attempted: false, completed: false, 
      description: "The ^ character in a RegEx matches the beginning of a string. The \w means match any word. Add a + after the \w to match 1 or more of the preceding item.",
      stringToSearch: "The raindeer in spain was hit mainly by the plane",
      regEx: "/^\w/",
      id: 2
   }

   $scope.learnPuzzles = [puzzleOne, puzzleTwo]

   $scope.learnPuzzles.forEach(function(puzzle){
      if ($routeParams.id === puzzle.id.toString()) {
         $scope.id = $routeParams.id;
         $scope.puzzle = puzzle
      } 
   })



   $scope.regexConverter = function (inputRegEx) {
      console.log("inputRegEx",inputRegEx)
      $scope.input = ""
   }
   
}]);   