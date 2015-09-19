app.constant("learningMode", [
   {
     title: "In The Beginning", difficulty: 1, 
     description: "The <font color='#CC4B09'> ^ </font> character in a RegEx matches the beginning of a string. The <font color='#CC4B09'> \\w </font> means match any word. Taken together, what should happen? Type <font color='#CC4B09'> ^\\w </font> to find out.",
     stringToSearch: "The rain in spain falls mainly on the plain",
     regEx: new RegExp("^\\w",""),
     id: 1,
     attempted: false, completed: false
  },

  {
     title: "The Whole Word", difficulty: 1, 
     description: "Add a <font color='#CC4B09'> ^ </font> character in a RegEx to match the beginning of a string. The <font color='#CC4B09'> \\w </font> means match any word character (alphanumberic). Add a <font color='#CC4B09'> + </font> after the <font color='#CC4B09'> \\w </font> to match 1 or more of the preceding item.",
     stringToSearch: "The raindeer in spain was hit mainly by the plane",
     regEx: new RegExp("^\\w+",""),
     id: 2,
     attempted: false, completed: false
  },

  {
     title: "Get all word-like characters", difficulty: 1, 
     description: "Putting something in brackets means match anything in the brackets. Type <font color='#CC4B09'> [\\w] </font> and add a <font color='#CC4B09'> g </font> flag in the right box to match everything 'globally' as in everywhere",
     stringToSearch: "Come with me if you want to live",
     regEx: new RegExp("[\\w]","g"),
     id: 3,
     attempted: false, completed: false
  },

  {
     title: "Get all word-like characters", difficulty: 1, 
     description: "Now just grab entire words. Type <font color='#CC4B09'> [\\w] </font> then add a <font color='#CC4B09'> + </font> after the brackets to match entire words. Keep a <font color='#CC4B09'> g </font> flag in the right box to match everything 'globally'",
     stringToSearch: "Come with me if you want to live",
     regEx: new RegExp("[\\w]+","g"),
     id: 4,
     attempted: false, completed: false
  },

  {
     title: "Get all word-like characters", difficulty: 1, 
     description: "Now just grab the first entire word. Remember how? Type <font color='#CC4B09'> ^ </font> for first item, then <font color='#CC4B09'> [\\w]+ </font> after the brackets to match entire words.",
     stringToSearch: "Come with me if you want to live",
     regEx: new RegExp("^[\\w]+","g"),
     id: 5,
     attempted: false, completed: false
  },

  {
     title: "Get all word-like characters", difficulty: 1, 
     description: "Now just grab the LAST entire word. This is new! Use the same <font color='#CC4B09'> [\\w]+ </font>  to match entire words, and add a <font color='#CC4B09'> $ </font> afterword for last item.",
     stringToSearch: "Come with me if you want to live",
     regEx: new RegExp("[\\w]+$",""),
     id: 6,
     attempted: false, completed: false
  },

  {
     title: "Gimme da capppsss", difficulty: 1, 
     description: "Now, grab only all the capital letters everywhere! Inside the <font color='#CC4B09'> [ ] </font> put down a range from <font color='#CC4B09'> A-Z </font>. Make sure to add a <font color='#CC4B09'> g </font> flag",
     stringToSearch: "Aziz! Light! Much better. Thank you, Aziz.",
     regEx: new RegExp("[A-Z]","g"),
     id: 7,
     attempted: false, completed: false
  },

  {
     title: "Lower case letters 4ever", difficulty: 1, 
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
  }

]);
