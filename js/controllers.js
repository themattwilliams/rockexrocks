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
         flags: false,
         id: 1
      },

      {
         title: "The Whole Word", difficulty: 1, attempted: false, completed: false, 
         description: "The ^ character in a RegEx matches the beginning of a string. The \\w means match any word. Add a + after the \\w to match 1 or more of the preceding item.",
         stringToSearch: "The raindeer in spain was hit mainly by the plane",
         regEx: "/^\w/",
         flags: false,
         id: 2
      },

      {
         title: "Grabs all opening words", difficulty: 1, attempted: false, completed: false, 
         description: "The ^ character in a RegEx matches the beginning of a string. The \\w means match any word. Add a + after the \\w to match 1 or more of the preceding item.",
         stringToSearch: "The raindeer in spain was hit mainly by the plane",
         regEx: "/^\w/",
         flags: false,
         id: 2
      }
   ]


   $scope.learnPuzzles.forEach(function(puzzle){
      if ($routeParams.id === puzzle.id.toString()) {
         $scope.id = $routeParams.id;
         $scope.puzzle = puzzle
      } 
   })



   $scope.regexConverter = function (inputRegEx, isFlags) {
      console.log("inputRegEx", inputRegEx.guess)
      if (isFlags) {
         var splitOnSlashArr = (inputRegEx.guess.split("/"))
         var flags = splitOnSlashArr[splitOnSlashArr.length -1]
      }

      console.log(isFlags)
      // var re = new RegEx("")
      $scope.input = ""
   }
   
}]);   