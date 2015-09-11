app.controller('RegExController', ["$scope", "$location", "$routeParams", function($scope, $location, $routeParams){
   $scope.changeView = function (view) {
      $location.path(view)
   }

   $scope.learnPuzzles = [
       {
         title: "In The Beginning", difficulty: 1, attempted: false, completed: false, 
         description: "The ^ character in a RegEx matches the beginning of a string. The \\w means match any word. Taken together, what should happen? Type /^\\w/ to find out.",
         stringToSearch: "The rain in spain falls mainly on the plain",
         regEx: "/^\w/",
         id: 1
      },

      {
         title: "The Whole Word", difficulty: 1, attempted: false, completed: false, 
         description: "The ^ character in a RegEx matches the beginning of a string. The \\w means match any word. Add a + after the \\w to match 1 or more of the preceding item.",
         stringToSearch: "The raindeer in spain was hit mainly by the plane",
         regEx: "/^\w/",
         id: 2
      },

      {
         title: "Grabs all opening words", difficulty: 1, attempted: false, completed: false, 
         description: "The ^ character in a RegEx matches the beginning of a string. The \\w means match any word. Add a + after the \\w to match 1 or more of the preceding item.",
         stringToSearch: "The raindeer in spain was hit mainly by the plane",
         regEx: "/^\w/",
         id: 2
      }
   ]


   $scope.learnPuzzles.forEach(function(puzzle){
      if ($routeParams.id === puzzle.id.toString()) {
         $scope.id = $routeParams.id;
         $scope.puzzle = puzzle;
      } 
   })



   $scope.regexConverter = function (inputRegEx, text) {
      console.log(text)
      console.log("inputRegEx", inputRegEx);
      var re = new RegExp(inputRegEx.guess,inputRegEx.flags);
      console.log(text.match(re))
      $scope.matchedString = text.match(re)
   }
   
}]);   