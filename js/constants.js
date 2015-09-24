app.constant("learningMode", [
   {
     title: "In The Beginning", difficulty: 1, 
     description: "The <font color='#CC4B09'> ^ </font> character in a RegEx matches the beginning of a string. The <font color='#CC4B09'> \\w </font> means match any word character. Taken together, what should happen? Type <font color='#CC4B09'> ^\\w </font> to find out.",
     stringToSearch: "The rain in spain falls mainly on the plain",
     regEx: new RegExp("^\\w",""),
     id: 1,
     attempted: false, completed: false
  },

  {
     title: "The Whole Word", difficulty: 1, 
     description: "Add a <font color='#CC4B09'> ^ </font> character in a RegEx to match the beginning of a string. The <font color='#CC4B09'> \\w </font> means match any word character (alphanumeric and underscore). Add a <font color='#CC4B09'> + </font> after the <font color='#CC4B09'> \\w </font> to match 1 or more of the preceding item.",
     stringToSearch: "The raindeer in spain was hit mainly by the plane",
     regEx: new RegExp("^\\w+",""),
     id: 2,
     attempted: false, completed: false
  },

  {
     title: "Get All Word-like Characters", difficulty: 1, 
     description: "Putting something in brackets means match anything in the brackets. Type <font color='#CC4B09'> [\\w] </font> and add a <font color='#CC4B09'> g </font> flag in the right box to match everything 'globally' as in everywhere",
     stringToSearch: "Come with me if you want to live",
     regEx: new RegExp("[\\w]","g"),
     id: 3,
     attempted: false, completed: false
  },

  {
     title: "Get All Entire Words", difficulty: 1, 
     description: "Now just grab entire words. Type <font color='#CC4B09'> [\\w] </font> then add a <font color='#CC4B09'> + </font> after the brackets to match entire words. Keep a <font color='#CC4B09'> g </font> flag in the right box to match everything 'globally'",
     stringToSearch: "Come with me if you want to live",
     regEx: new RegExp("[\\w]+","g"),
     id: 4,
     attempted: false, completed: false
  },

  {
     title: "Always Remember Your First", difficulty: 1, 
     description: "Now just grab the first entire word. Remember how? Type <font color='#CC4B09'> ^ </font> for first item, then <font color='#CC4B09'> [\\w]+ </font> after the brackets to match entire words.",
     stringToSearch: "Come with me if you want to live",
     regEx: new RegExp("^[\\w]+","g"),
     id: 5,
     attempted: false, completed: false
  },

  {
     title: "Last One Is The Rotten Egg", difficulty: 1, 
     description: "Now just grab the LAST entire word. This is new! Use the same <font color='#CC4B09'> [\\w]+ </font>  to match entire words, and add a <font color='#CC4B09'> $ </font> afterword for last item.",
     stringToSearch: "Come with me if you want to live",
     regEx: new RegExp("[\\w]+$",""),
     id: 6,
     attempted: false, completed: false
  },

  {
     title: "Gimme Da Capppsss", difficulty: 1, 
     description: "Now, grab only all the capital letters everywhere! Inside the <font color='#CC4B09'> [ ] </font> put down a range from <font color='#CC4B09'> A-Z </font>. Make sure to add a <font color='#CC4B09'> g </font> flag",
     stringToSearch: "Aziz! Light! Much better. Thank you, Aziz.",
     regEx: new RegExp("[A-Z]","g"),
     id: 7,
     attempted: false, completed: false
  },

  {
     title: "Lower Case Letters 4ever", difficulty: 1, 
     description: "Now, grab only all the lower letters everywhere! Inside the <font color='#CC4B09'> [ ] </font> put down a range from <font color='#CC4B09'> a-z </font>. Again, make sure to add a <font color='#CC4B09'> g </font> flag",
     stringToSearch: "Aziz! Light! Much better. Thank you, Aziz.",
     regEx: new RegExp("[a-z]","g"),
     id: 8,
     attempted: false, completed: false
  },

  {
     title: "Mind Blown!", difficulty: 1, 
     description: "You kinda know that <font color='#CC4B09'> \\w </font> matches any word character (alphanumberic and underscore). So it should make sense that it is THE SAME as <font color='#CC4B09'> [A-Za-z0-9_] </font>. Type in <font color='#CC4B09'> [A-Za-z0-9_] </font> to see the magic",
     stringToSearch: "Come with me if you want to live",
     regEx: new RegExp("[A-Za-z0-9_]",""),
     id: 9,
     attempted: false, completed: false
  },

  {
     title: "Mind Blown: First Word!", difficulty: 1, 
     description: "Now type <font color='#CC4B09'> [A-Za-z0-9_] </font> but add a <font color='#CC4B09'> + </font> after. Remember, a <font color='#CC4B09'> + </font> matches one or more instance of the preceding token. See what happens!",
     stringToSearch: "Come with me if you want to live",
     regEx: new RegExp("[A-Za-z0-9_]+",""),
     id: 10,
     attempted: false, completed: false
  },

  {
     title: "Mind Blown: Last Word! ", difficulty: 1, 
     description: "Now type <font color='#CC4B09'> [A-Za-z0-9_] </font>, add a <font color='#CC4B09'> + </font> and then add a <font color='#CC4B09'> $ </font>. Remember, a <font color='#CC4B09'> + </font> matches one or more instance of the preceding token, a <font color='#CC4B09'> $ </font> matches the end of the string.",
     stringToSearch: "Come with me if you want to live",
     regEx: new RegExp("[A-Za-z0-9_]+$",""),
     id: 11,
     attempted: false, completed: false
  },

  {
     title: "Show Me Your Digits", difficulty: 1, 
     description: "<font color='#CC4B09'> \\d </font> selects the first match of any digit from 0 to 9. Select all three numbers below using <font color='#CC4B09'> \\d </font>  and a <font color='#CC4B09'> + </font> ",
     stringToSearch: "You've got the wrong number, this is... 912",
     regEx: new RegExp("\\d+",""),
     id: 12,
     attempted: false, completed: false
  },

  {
     title: "Dots Everywhere!", difficulty: 1, 
     description: "the <font color='#CC4B09'> . </font> is used to denote a wildcard character. it will match a number, a letter, a space, you name it! Use <font color='#CC4B09'> go </font> plus the <font color='#CC4B09'> . </font> character to select all the words! Do you need a flag?",
     stringToSearch: "going going gone!",
     regEx: new RegExp("go...","g"),
     id: 13,
     attempted: false, completed: false
  },

  {
     title: "Be Selective", difficulty: 1, 
     description: "Using brackets <font color='#CC4B09'> [ ] </font> will select a match of anything inside in any order. The letters OUTSIDE the brackets much match IN ORDER. Knowing this, match ONLY the first 3 words by using <font color='#CC4B09'> [ ] </font>. I won't mention <font color='#CC4B09'> g </font> flag anymore, you should know when you need it.",
     stringToSearch: "vain cain gain rain pain",
     regEx: new RegExp("[vcg]ain","g"),
     id: 14,
     attempted: false, completed: false
  },

  {
     title: "I Don't Want These!", difficulty: 1, 
     description: "Putting a <font color='#CC4B09'> ^ </font> inside the brackets will negate the contents. This means that <font color='#CC4B09'> [^abc] </font> will NOT select <font color='#CC4B09'> a b </font> or <font color='#CC4B09'> c </font> . Using <font color='#CC4B09'> ^ </font> and <font color='#CC4B09'> [ ] </font>, select only the middle 3 words",
     stringToSearch: "vain cain gain rain pain",
     regEx: new RegExp("[^vp]ain","g"),
     id: 15,
     attempted: false, completed: false
  },

  {
     title: "Home, Home On The Range", difficulty: 1, 
     description: "You've seen a little about the <font color='#CC4B09'> - </font> character. It returns a range. So <font color='#CC4B09'> [1-4] </font> returns 1 through 4. <font color='#CC4B09'> [a-c] </font> returns a b, or c. Also, <font color='#CC4B09'> [^a-c] </font> returns things that are not a b, or c. Use range to select lmnop",
     stringToSearch: "abcdefghijklmnopqrstuvwxyz",
     regEx: new RegExp("[l-p]","g"),
     id: 16,
     attempted: false, completed: false
  },

  {
     title: "It's Symbolic", difficulty: 1, 
     description: "Where <font color='#CC4B09'> \\w </font> selects alphanumberic and underscore, <font color='#CC4B09'> \\W </font> selects the OPPOSITE --- which is symbols, spaces, etc. Use <font color='#CC4B09'> \\W </font> to select all symbols and spaces",
     stringToSearch: "n3v3r G0 FULL r37@rD",
     regEx: new RegExp("[\\W]","g"),
     id: 17,
     attempted: false, completed: false
  },

  {
     title: "Repeat After Me...", difficulty: 1, 
     description: "The <font color='#CC4B09'> { } </font> is used to denote repetion. <font color='#CC4B09'> w{2} </font> will match ww but not w. You can give it a range as well. <font color='#CC4B09'> w{1,2} </font> matches w and ww but not www. Match ONLY words with MORE THAN 1 z.",
     stringToSearch: "wazzzzupppp? wazup? waaaaazzzzzuupp???",
     regEx: new RegExp("z{2,5}","g"),
     id: 18,
     attempted: false, completed: false
  }

  // {
  //    title: "Mind Blown: Last Word!", difficulty: 1, 
  //    description: "Now type <font color='#CC4B09'> [A-Za-z0-9_] </font>, add a <font color='#CC4B09'> + </font> and then add a <font color='#CC4B09'> $ </font>. Remember, a <font color='#CC4B09'> + </font> matches one or more instance of the preceding token, a <font color='#CC4B09'> $ </font> matches the end of the string.",
  //    stringToSearch: "Come with me if you want to live",
  //    regEx: new RegExp("[A-Za-z0-9_]+$",""),
  //    id: 19,
  //    attempted: false, completed: false
  // },

  // {
  //    title: "Mind Blown: Last Word! ", difficulty: 1, 
  //    description: "Now type <font color='#CC4B09'> [A-Za-z0-9_] </font>, add a <font color='#CC4B09'> + </font> and then add a <font color='#CC4B09'> $ </font>. Remember, a <font color='#CC4B09'> + </font> matches one or more instance of the preceding token, a <font color='#CC4B09'> $ </font> matches the end of the string.",
  //    stringToSearch: "Come with me if you want to live",
  //    regEx: new RegExp("[A-Za-z0-9_]+$",""),
  //    id: 20,
  //    attempted: false, completed: false
  // },

  // {
  //    title: "Mind Blown: Last Word! ", difficulty: 1, 
  //    description: "Now type <font color='#CC4B09'> [A-Za-z0-9_] </font>, add a <font color='#CC4B09'> + </font> and then add a <font color='#CC4B09'> $ </font>. Remember, a <font color='#CC4B09'> + </font> matches one or more instance of the preceding token, a <font color='#CC4B09'> $ </font> matches the end of the string.",
  //    stringToSearch: "Come with me if you want to live",
  //    regEx: new RegExp("[A-Za-z0-9_]+$",""),
  //    id: 21,
  //    attempted: false, completed: false
  // },

  // {
  //    title: "Mind Blown: Last Word! ", difficulty: 1, 
  //    description: "Now type <font color='#CC4B09'> [A-Za-z0-9_] </font>, add a <font color='#CC4B09'> + </font> and then add a <font color='#CC4B09'> $ </font>. Remember, a <font color='#CC4B09'> + </font> matches one or more instance of the preceding token, a <font color='#CC4B09'> $ </font> matches the end of the string.",
  //    stringToSearch: "Come with me if you want to live",
  //    regEx: new RegExp("[A-Za-z0-9_]+$",""),
  //    id: 22,
  //    attempted: false, completed: false
  // }

]);
// ####################################################################################################################################################################################################

app.constant("gameMode", [
	 {
	   title: "In The Beginning", difficulty: 1, 
	   description: "Select only the first character of the string",
	   stringToSearch: "The rain in spain falls mainly on the plain",
	   regEx: new RegExp("^\\w",""),
	   id: 1001,
	   attempted: false, completed: false
	},

	{
	   title: "The Whole Word", difficulty: 1, 
	   description: "Select only the entire first word",
	   stringToSearch: "The raindeer in spain was hit mainly by the plane",
	   regEx: new RegExp("^\\w+",""),
	   id: 1002,
	   attempted: false, completed: false
	},

	{
	   title: "Get all word-like characters", difficulty: 1, 
	   description: "select all-word characters separately",
	   stringToSearch: "Come with me if you want to live",
	   regEx: new RegExp("[\\w]","g"),
	   id: 1003,
	   attempted: false, completed: false
	},

	{
	   title: "Get all word-like characters", difficulty: 1, 
	   description: "Select all words",
	   stringToSearch: "Come with me if you want to live",
	   regEx: new RegExp("[\\w]+","g"),
	   id: 1004,
	   attempted: false, completed: false
	},

	{
	   title: "Get all word-like characters", difficulty: 1, 
	   description: "Select the first entire word",
	   stringToSearch: "Come with me if you want to live",
	   regEx: new RegExp("^[\\w]+","g"),
	   id: 1005,
	   attempted: false, completed: false
	},

	{
	   title: "Get all word-like characters", difficulty: 1, 
	   description: "Now just grab the LAST entire word",
	   stringToSearch: "Come with me if you want to live",
	   regEx: new RegExp("[\\w]+$",""),
	   id: 1006,
	   attempted: false, completed: false
	},

	{
	   title: "Gimme da capppsss", difficulty: 1, 
	   description: "Now, grab only all the capital letters everywhere!",
	   stringToSearch: "Aziz! Light! Much better. Thank you, Aziz.",
	   regEx: new RegExp("[A-Z]","g"),
	   id: 1007,
	   attempted: false, completed: false
	},

	{
	   title: "Lower case letters 4ever", difficulty: 1, 
	   description: "Now, grab only all the lower letters everywhere!",
	   stringToSearch: "Aziz! Light! Much better. Thank you, Aziz.",
	   regEx: new RegExp("[a-z]","g"),
	   id: 1008,
	   attempted: false, completed: false
	},

	{
	   title: "Mind Blown!", difficulty: 1, 
	   description: "Grab all alphanumberic characters",
	   stringToSearch: "Come with me if you want to live",
	   regEx: new RegExp("[A-Za-z0-9_]",""),
	   id: 1009,
	   attempted: false, completed: false
	},

	{
	   title: "First word: The Hard Way", difficulty: 1, 
	   description: "select the entire first word",
	   stringToSearch: "Come with me if you want to live",
	   regEx: new RegExp("[A-Za-z0-9_]+",""),
	   id: 1010,
	   attempted: false, completed: false
	},

	{
	   title: "In The End ", difficulty: 1, 
	   description: "Select the entire last word",
	   stringToSearch: "Come with me if you want to live",
	   regEx: new RegExp("[A-Za-z0-9_]+$",""),
	   id: 1011,
	   attempted: false, completed: false
	}


]);
