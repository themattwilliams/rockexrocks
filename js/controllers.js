app.controller('RegExController', ["$scope", "$location", "$routeParams", "$route", "$timeout", "learningMode", "gameMode", "$firebaseObject", "$firebaseArray", function($scope, $location, $routeParams, $route, $timeout, learningMode, gameMode, $firebaseObject, $firebaseArray){
   var ref = new Firebase("https://radiant-torch-6315.firebaseio.com/");
   var syncObject = $firebaseObject(ref);
   var winsArray = [-1];

   $scope.githubLogin = function () {
      ref.authWithOAuthRedirect("github", function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          // We'll never get here, as the page will redirect on success.
        }
      });
   };

   $scope.githubLogOut = function () {
      ref.unauth();
   };

   function authDataCallback(authData) {
     if (authData) {
       console.log("User " + authData.uid + " is logged in with " + authData.provider);

       // if (syncObject[authData.uid] === "undefined") {
          syncObject.$loaded().then(function() {
            syncObject[authData.uid] = {"wins":winsArray};
            syncObject.$save()
          })


       // };
     } else {
       console.log("User is logged out");
     }
   };

   ref.onAuth(authDataCallback);

   $scope.changeView = function (view) {
      $location.path(view)
   }
   // $scope.name = 'Superhero';
   // $scope.my_html = '<label><b>Hello </b> <input type="text" value="world !"></label>';

   $scope.tryAgain = function () {
      console.log($location.$$path)
      $('.container').addClass('fadeOutLeft')
      $timeout(function(){
         $route.reload()
      },500)
   }

   $scope.nextPuzzle = function () {
      $('.container').addClass('fadeOutLeft')
      $timeout(function(){
         var next = parseInt($routeParams.id) + 1
         next = "/" + next
         $location.path(next)
      },500)
   }

   $scope.keypressAction = function(){
      if ($('.c6').hasClass('animated flipInX')) {
         $scope.tryAgain();
      }
      if ($('.c7').hasClass('animated flipInX')) {
         $scope.nextPuzzle();
      }
   };

     // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
     $('.modal-trigger').leanModal();

     var windowSizer = function() {
      if ($( window ).width() < 800) {
          $(".container").css("width", "60%")
          $(".container").css("margin-left", "20%")
          $(".container").css("margin-right", "20%")
          $(".container").css("font-size", "1.2em")
          if ($location.$$path === "/allPuzzles") {
             $(".all-puzzles").css("font-size", "1em")
          }
       } else if ($( window ).width() > 800 && $( window ).width() < 1600) {
          $(".container").css("width", "50%")
          $(".container").css("margin-left", "25%")
          $(".container").css("margin-right", "25%")
          $(".container").css("font-size", "1.5em")
          if ($location.$$path === "/allPuzzles") {
             $(".all-puzzles").css("font-size", "1.2em")
          }
       } else if ($( window ).width() > 1600 && $( window ).width() < 1800) {
          $(".container").css("width", "50%")
          $(".container").css("margin-left", "25%")
          $(".container").css("margin-right", "25%")
          $(".container").css("font-size", "2em")
          if ($location.$$path === "/allPuzzles") {
             $(".all-puzzles").css("font-size", "2em")
          }
      } else if ($( window ).width() > 1800 ) {
          $(".container").css("width", "50%")
          $(".container").css("margin-left", "35%")
          $(".container").css("margin-right", "35%")
          $(".container").css("font-size", "2em")
          if ($location.$$path === "/allPuzzles") {
             $(".all-puzzles").css("font-size", "2em")
          }
       }
     }()

     var onResize = function () {
      $(window).resize(function(event) {
        console.log( $( window ).width() )
        if ($( window ).width() < 800) {
            $(".container").css("width", "60%")
            $(".container").css("margin-left", "20%")
            $(".container").css("margin-right", "20%")
            $(".container").css("font-size", "1.2em")
            if ($location.$$path === "/allPuzzles") {
               $(".all-puzzles").css("font-size", "1em")
            }
         } else if ($( window ).width() > 800 && $( window ).width() < 1600) {
            $(".container").css("width", "50%")
            $(".container").css("margin-left", "25%")
            $(".container").css("margin-right", "25%")
            $(".container").css("font-size", "1.5em")
            if ($location.$$path === "/allPuzzles") {
               $(".all-puzzles").css("font-size", "1.2em")
            }
         } else if ($( window ).width() > 1600 && $( window ).width() < 1800) {
            $(".container").css("width", "50%")
            $(".container").css("margin-left", "25%")
            $(".container").css("margin-right", "25%")
            $(".container").css("font-size", "2em")
            if ($location.$$path === "/allPuzzles") {
               $(".all-puzzles").css("font-size", "2em")
            }
        } else if ($( window ).width() > 1800 ) {
            $(".container").css("width", "50%")
            $(".container").css("margin-left", "35%")
            $(".container").css("margin-right", "35%")
            $(".container").css("font-size", "2em")
            if ($location.$$path === "/allPuzzles") {
               $(".all-puzzles").css("font-size", "2em")
            }
         }
      });  
   }()

 // MENU ********************************

   $scope.hoverEnter = function(){
       this.hoverOn = true;
       navHover();
       // console.log("foo");   
   };

   $scope.hoverExit = function(){
       this.hoverOn = false;
       // console.log("bar");
   };

   var navHover = function () {
      $('#home').hover(function() {
      /* Stuff to do when the mouse enters the element */
         console.log(this)
         $('#home').css("color","#127C22")

      }, function() {
         /* Stuff to do when the mouse leaves the element */
        $('#home').css("color","#CC4B09")
      });

      $('#home').click(function(event) {
         /* Act on the event */
         console.log("foobar")
         $location.path('/allPuzzles')
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
   }

   $scope.learningMode = learningMode;
   $scope.gameMode = gameMode;

   learningMode.forEach(function(puzzle){
      if ($routeParams.id === puzzle.id.toString()) {
         $scope.id = $routeParams.id;
         $scope.puzzle = puzzle;
      } 
   })

   gameMode.forEach(function(puzzle){
      if ($routeParams.id === puzzle.id.toString()) {
         $scope.id = $routeParams.id;
         $scope.puzzle = puzzle;
      } 
   })

   $scope.regexConverter = function (inputRegEx, stringToParse, answerToPuzzle) {
      var re = new RegExp(inputRegEx.guess,inputRegEx.flags);
      var match = stringToParse.match(re)
      var answer = stringToParse.match(answerToPuzzle)
      $('.c5').removeClass('hide').addClass('animated flipInX')
      if (match) {
         $scope.userAnswer = "Your RegEx Returns: " + match
      } else {
         $scope.userAnswer = "Ruh Roh! Your RegEx didn't return anything!"
      }
      if (_.isEqual(match, answer) && match !== null) {
         $(".c4").addClass('correct');
         var puzzle = $routeParams.id 
      } else {
         $(".c4").addClass('wrong');
         var puzzle = $routeParams.id 
      }

     setTimeout(function(){
         if ( $(".c4").hasClass('correct') ){
            $('.c7').removeClass('hide').addClass('animated flipInX')
         } 
      }, 760) 
     setTimeout(function(){
         if ( $(".c4").hasClass('wrong') ){
            $('.c6').removeClass('hide').addClass('animated flipInX')
         } 
      }, 760)
   }
   
}]);   