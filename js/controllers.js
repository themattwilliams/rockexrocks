app.controller('RegExController', ["$scope", "$location", "$routeParams", "$route", "$timeout", "learningMode", "gameMode", "$firebaseObject", "AuthId", function($scope, $location, $routeParams, $route, $timeout, learningMode, gameMode, $firebaseObject, AuthId){
   var ref = new Firebase("https://radiant-torch-6315.firebaseio.com/");
   var syncObject = $firebaseObject(ref);
   var arr = [];
   // arr[0] = 3
   // arr[1] = 322
   // arr[2] = 4
   // localStorage['arr'] = JSON.stringify(arr)
   // var storedWins = JSON.parse(localStorage['arr'])

   // $scope.puzzleFinder = function (puzzleId) {
   //    syncObject.$loaded(function(){
   //       // console.log(puzzleId)
   //       // console.log(AuthId.uid,"*********AUTHID**********");
         
   //       syncObject[AuthId.uid].forEach(function(puzzle){
   //          if (puzzleId == puzzle) {
   //             console.log("FOUND")
   //             return true
   //          }
   //       })
   //       return false
   //    })

   // }

   $scope.githubLogin = function () {
      ref.authWithOAuthRedirect("github", function(error) {
         
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
         AuthId.set(authData.uid) 
         console.log("User " + authData.uid + " is logged in with " + authData.provider);
         // console.log($routeParams.id, "I'M THE ID FROM ROUTE")
         syncObject.$loaded().then(function() {
            // console.log(syncObject,"*********SYNCOBJECT**********");
            // syncObject[authData.uid] = winPuzzleId
            if (!syncObject[authData.uid]) {
               syncObject[authData.uid] = [0];
               syncObject.$save();     
            }
            // console.log(syncObject,"*********SYNCOBJECT**********");
         })
      } else {
       console.log("User is logged out");
     }
   };

   function userWins () {
      var winPuzzleId = parseInt($routeParams.id)
      if (syncObject[AuthId.uid]) {
         var duplicateFound = false
         syncObject[AuthId.uid].forEach(function(previousWin) {
            if (previousWin === winPuzzleId) {
               console.log("Win dup found at id", previousWin);
               duplicateFound = true
            }
         })
         if (!duplicateFound) {
            syncObject[AuthId.uid].push(winPuzzleId)   
            syncObject.$save()
         }
      }
   }

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

   if (AuthId.uid) {
      console.log("AUTH ID FOUND")
      console.log(learningMode)

      syncObject.$loaded(function() {
         for (each in learningMode) {
            // console.log(learningMode[each].id)
            for (i = 0 ; i < syncObject[AuthId.uid].length ; i++) {
               if (syncObject[AuthId.uid][i] === learningMode[each].id) {
                  console.log("WIN FOUND")
                  learningMode[each].completed = true
               }
            }
         }
         $scope.learningMode = learningMode;
      })
   } else {
      console.log("NO AUTH ID FOUND")
      $scope.learningMode = learningMode;
   }

   

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

   // var pushWinsToFirebaseArray = function (id) {
   //    ref.onAuth(authDataCallback);
   // }

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
         // pushWinsToFirebaseArray();
         userWins()
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