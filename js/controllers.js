app.controller('RegExController', ["$scope", "$location", "$routeParams", function($scope, $location, $routeParams){
   $scope.changeView = function (view) {
      $location.path(view)
   }

   var puzzleOne = {
      puzzle: "In The Beginning", difficulty: 1, attempted: false, completed: false, 
      description: "The ^ character in a RegEx matches the beginning of a string. The \w means match any word. Taken together, what should happen? Type /^\w/ to find out.",
      stringToSearch: "The rain in spain falls mainly on the plane",
      regEx: "/^\w/",
      id: 1
   }

   var puzzleTwo = {
      puzzle: "In The Beginning", difficulty: 1, attempted: false, completed: false, 
      description: "The ^ character in a RegEx matches the beginning of a string. The \w means match any word. Taken together, what should happen? Type /^\w/ to find out.",
      stringToSearch: "The rain in spain falls mainly on the plane",
      regEx: "/^\w/",
      id: 2
   }

   $scope.learnPuzzles = [puzzleOne, puzzleTwo]
   $scope.id = $routeParams.id;

   // console.log("foo");

   // $scope.foo = "bananagram"
  //  $scope.contactData = ContactList.contactList;
  //  $scope.addContact = ContactList.addContact;
 	// // console.log(ContactList)
  //  // console.log($scope.newContact,"*********NEWCONTACT**********");
   
  //  $scope.saveContact = function () {
	 //   $scope.addContact({
	 //   	name: $scope.newContact.cName,
	 //   	email:$scope.newContact.cEmail,
	 //   	phone:$scope.newContact.cPhone
	 //   });

  //  };

  //  $scope.findContact = function (contact) {
  //  	ContactList.findContact(contact)
  //  }
   
}]);   