app.controller('RegExController', ["$scope", "$location", "$routeParams", "$route", "$timeout", "learningMode", "gameMode", "$firebaseObject", function($scope, $location, $routeParams, $route, $timeout, learningMode, gameMode, $firebaseObject){
   var ref = new Firebase("https://radiant-torch-6315.firebaseio.com/");
   var syncObject = $firebaseObject(ref);
   syncObject.$bindTo($scope, "test")


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

   if ($( window ).width() < 800) {
       $(".container").css("width", "60%")
       $(".container").css("margin-left", "15%")
       $(".container").css("margin-right", "15%")
   };


   $(window).resize(function(event) {

     console.log( $( window ).width() )
     if ($( window ).width() < 800) {
         $(".container").css("width", "60%")
         $(".container").css("margin-left", "20%")
         $(".container").css("margin-right", "20%")
     };

     if ($( window ).width() > 800) {
         $(".container").css("width", "40%")
         $(".container").css("margin-left", "30%")
         $(".container").css("margin-right", "30%")
     };

   });  

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

   // if ($routeParams.id > 1000) {
   //    console.log($('#learnMode'))
   //    $('#learnMode').css({
   //       '-webkit-animation': '5s linear 0s normal none infinite animate;',
   //       '-moz-animation': '5s linear 0s normal none infinite animate;',
   //       'animation': '5s linear 0s normal none infinite animate;'
   //    });
   //   // -webkit-animation: 15s linear 0s normal none infinite animate;
   //   // -moz-animation: 15s linear 0s normal none infinite animate;
   //   // -ms-animation: 15s linear 0s normal none infinite animate;
   //   // -o-animation: 15s linear 0s normal none infinite animate;
   //   // animation: 15s linear 0s normal none infinite animate;

   // }


   $scope.regexConverter = function (inputRegEx, stringToParse, answerToPuzzle) {

      var re = new RegExp(inputRegEx.guess,inputRegEx.flags);
            console.log(re,"*********RE**********");
            console.log(answerToPuzzle,"*********ANSWERTOPUZZLE**********");

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
      } else {
         $(".c4").addClass('wrong');

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