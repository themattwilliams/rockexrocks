app.controller('RegExController', ["$scope", "$location", "$routeParams", "$route", "$timeout", "learningMode", "gameMode", "$firebaseObject", "AuthId", function($scope, $location, $routeParams, $route, $timeout, learningMode, gameMode, $firebaseObject, AuthId){
   var ref = new Firebase("https://radiant-torch-6315.firebaseio.com/");
   var syncObject = $firebaseObject(ref);
   var arr = [];
   $scope.AuthId = AuthId.uid;

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
      Materialize.toast('You have logged out', 1000)  
      setTimeout(function () {
          authLoaded();
          $route.reload();
      },1100)
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
            authLoaded(authData);
            // console.log(syncObject,"*********SYNCOBJECT**********");
         })
      } else {
       console.log("User is logged out");
       $scope.learningMode = learningMode;
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
      $timeout(function(){
         // $route.reload()
         $('.c6').removeClass('flipInX').addClass('flipOutX')
         $('.c5').removeClass('flipInX').addClass('flipOutX')
         $('.container').removeClass('shake-again')
      },500)

   }

   $scope.nextPuzzle = function () {
      $('.container').removeClass('shake')
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
      if ($( window ).width() < 401) {
          $(".container").css("width", "100%")
          $(".container").css("margin-left", "0%")
          $(".container").css("margin-right", "0%")
          $(".container").css("font-size", "1.2em")
          if ($location.$$path === "/allPuzzles") {
             $(".all-puzzles").css("font-size", "1em")
          }
       } else if ($( window ).width() < 800 && $( window ).width() > 402){
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
      } else if ($( window ).width() > 1800 && $( window ).width() < 1950) {
          $(".container").css("width", "50%")
          $(".container").css("margin-left", "30%")
          $(".container").css("margin-right", "30%")
          $(".container").css("font-size", "2em")
          if ($location.$$path === "/allPuzzles") {
             $(".all-puzzles").css("font-size", "2em")
          }
       } else if ($( window ).width() > 1950 ) {
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

        if ($( window ).width() < 401) {
            $(".container").css("width", "100%")
            $(".container").css("margin-left", "0%")
            $(".container").css("margin-right", "0%")
            $(".container").css("font-size", "1.2em")
            if ($location.$$path === "/allPuzzles") {
               $(".all-puzzles").css("font-size", "1em")
            }
         } else if ($( window ).width() < 800 && $( window ).width() > 402) {
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
        } else if ($( window ).width() > 1800 && $( window ).width() < 1950) {
            $(".container").css("width", "50%")
            $(".container").css("margin-left", "30%")
            $(".container").css("margin-right", "30%")
            $(".container").css("font-size", "2em")
            if ($location.$$path === "/allPuzzles") {
               $(".all-puzzles").css("font-size", "2em")
            }
         } else if ($( window ).width() > 1950 ) {
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
         console.log(this)
         $('#home').css("color","#127C22")

      }, function() {
        $('#home').css("color","#CC4B09")
      });

      $('#home').click(function(event) {
         $location.path('/allPuzzles')
      });

      $('#learn').hover(function() {
         console.log(this)
         $('#learn').css("color","#127C22")
         
      }, function() {
        $('#learn').css("color","#CC4B09")
      });

      $('#gamepad').hover(function() {
         console.log(this)
         $('#gamepad').css("color","#127C22")
         
      }, function() {
        $('#gamepad').css("color","#CC4B09")
      });

      $('#question').hover(function() {
         console.log(this)
         $('#question').css("color","#127C22")
         
      }, function() {
        $('#question').css("color","#CC4B09")
      });

      $('#sign-in').hover(function() {
         console.log(this)
         $('#sign-in').css("color","#127C22")
         
      }, function() {
        $('#sign-in').css("color","#CC4B09")
      });

      $('#sign-out').hover(function() {
         console.log(this)
         $('#sign-out').css("color","#127C22")
         
      }, function() {
        $('#sign-out').css("color","#CC4B09")
      });
   }

   function authLoaded (authData) {
      if (authData) {
         console.log("AUTH ID FOUND")

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
      }
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

   $scope.regexConverter = function (inputRegEx, stringToParse, answerToPuzzle) {
      // $('.container').removeClass('shake')
      $(".c4").removeClass('wrong')
      var re = new RegExp(inputRegEx.guess,inputRegEx.flags);
      var match = stringToParse.match(re)
      var answer = stringToParse.match(answerToPuzzle)
      $('.c5').removeClass('hide flipOutX').addClass('animated flipInX')
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
         $('.container').addClass('shake')
         // $('.container').addClass('shake-again')
         var puzzle = $routeParams.id 
      }

     setTimeout(function(){
         if ( $(".c4").hasClass('correct') ){
            $('.c7').removeClass('hide flipOutX').addClass('animated flipInX')
            $('.c6').addClass('hide')
         } 
      }, 760) 
     setTimeout(function(){
         if ( $(".c4").hasClass('wrong') ){
            $('.c6').removeClass('hide flipOutX').addClass('animated flipInX')
            $scope.input = angular.copy($scope.master);
         } 
      }, 760)
   }

   $(document).ready(function(){
       animateDiv();   
   });

   function makeNewPosition(){      
       // Get viewport dimensions (remove the dimension of the div)
       var h = $(window).height() - 50;
       var w = $(window).width() - 50;
       
       var nh = Math.floor(Math.random() * h);
       var nw = Math.floor(Math.random() * w);    
       return [nh,nw];        
   }

   function animateDiv(){
       var newq = makeNewPosition();
       var oldq = $('.a').offset();
       var speed = calcSpeed([oldq.top, oldq.left], newq);     
       $('.a').animate({ left: newq[1] }, speed, function(){
         animateDiv();        
       });      
   };

   function calcSpeed(prev, next) {     
       var x = Math.abs(prev[1] - next[1]);
       var y = Math.abs(prev[0] - next[0]);     
       var greatest = x > y ? x : y;    
       var speedModifier = 0.1;
       var speed = Math.ceil(greatest/speedModifier);
       return speed;
   }
   
}]);   