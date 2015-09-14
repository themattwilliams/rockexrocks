app.controller('RegExController', ["$scope", "$location", "$routeParams", function($scope, $location, $routeParams){
   $scope.changeView = function (view) {
      $location.path(view)
   }

   $scope.learnPuzzles = [
       {
         title: "In The Beginning", difficulty: 1, attempted: false, completed: false, 
         description: "The ^ character in a RegEx matches the beginning of a string. The \\w means match any word. Taken together, what should happen? Type (^\\w) to find out.",
         stringToSearch: "The rain in spain falls mainly on the plain",
         regEx: new RegExp("^\\w",""),
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



   $scope.regexConverter = function (inputRegEx, stringToParse, answerToPuzzle) {

      var re = new RegExp(inputRegEx.guess,inputRegEx.flags);
            console.log(re,"*********RE**********");
            console.log(answerToPuzzle,"*********ANSWERTOPUZZLE**********");

      var match = stringToParse.match(re)
      var answer = stringToParse.match(answerToPuzzle)
      $('.c5').removeClass('hide').addClass('animated flipInX')
      $(".c5").text(match)

      if (_.isEqual(match, answer)) {
          // $(".c4").text("MATCH FOUND");
          $(".c4").addClass('correct');
      } else {
         // $(".c4").text("NOPE!");
         $(".c4").addClass('wrong')

      }
     
      // if( $(".c5").hasClass('animated flipInX')){
      //    $('.c6').removeClass('hide').addClass('animated bounce')
      //    $(".c6").text("HI KATE")
      // } 
   }
  
   // var $stringChange = function(re){
   //       var oldHTML = $('.c3')[0].innerHTML
   //       console.log(oldHTML, "oldHTML")
   //       console.log($('.c3')[0].innerHTML)
   //       console.log(re,"*********RE**********");
   //       console.log(re)
   //       re = new RegExp('([a])','g')
   //       console.log(re,"*********RE**********");

   //       var newHTML = 'bla bla this is some text this is some text bla bla'.replace(re, "<span class='highlight'>$1</span>");
   //       console.log(newHTML,"*********NEWHTML**********");

   //      $('.c3')[0].innerHTML = newHTML;
   // }


   
   
}]);   