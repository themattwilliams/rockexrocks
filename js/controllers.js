app.controller('RegExController', ["$scope", "$location", "$routeParams", "$route", "$timeout", function($scope, $location, $routeParams, $route, $timeout){
   $scope.changeView = function (view) {
      $location.path(view)
   }

   $scope.tryAgain = function () {
      console.log($location.$$path)
      $route.reload()
   }

   $scope.nextPuzzle = function () {
      $('.container').addClass('fadeOutLeft')
      $timeout(function(){
         var next = parseInt($routeParams.id) + 1
         next = "/" + next
         $location.path(next)
      },500)
   }

     // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
     $('.modal-trigger').leanModal();

 // MENU ********************************

   $scope.hoverEnter = function(){
       this.hoverOn = true;
       // console.log("foo");   
   };

   $scope.hoverExit = function(){
       this.hoverOn = false;
       // console.log("bar");
   };

   $('#home').hover(function() {
   /* Stuff to do when the mouse enters the element */
      console.log(this)
      $('#home').css("color","#127C22")

   }, function() {
      /* Stuff to do when the mouse leaves the element */
     $('#home').css("color","#CC4B09")
   });

   $('#learn').hover(function() {
   /* Stuff to do when the mouse enters the element */
      console.log(this)
      $('#learn').css("color","#127C22")
      
   }, function() {
      /* Stuff to do when the mouse leaves the element */
     $('#learn').css("color","#CC4B09")
   });

   $('#gamepad').hover(function() {
   /* Stuff to do when the mouse enters the element */
      console.log(this)
      $('#gamepad').css("color","#127C22")
      
   }, function() {
      /* Stuff to do when the mouse leaves the element */
     $('#gamepad').css("color","#CC4B09")
   });

   $('#question').hover(function() {
   /* Stuff to do when the mouse enters the element */
      console.log(this)
      $('#question').css("color","#127C22")
      
   }, function() {
      /* Stuff to do when the mouse leaves the element */
     $('#question').css("color","#CC4B09")
   });


   // MENU ********************************


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
      $scope.userAnswer = "Your RegEx Returns: " + match

      if (_.isEqual(match, answer) && match !== null) {
         $(".c4").addClass('correct');
      } else {
         $(".c4").addClass('wrong');

      }
     setTimeout(function(){
         if ( $(".c4").hasClass('correct') ){
            $('.c7').removeClass('hide').addClass('animated fadeInUp')
         } 
      }, 760) 

     setTimeout(function(){
         if ( $(".c4").hasClass('wrong') ){
            $('.c6').removeClass('hide').addClass('animated fadeInUp')
         } 
      }, 760)
   }
   
}]);   