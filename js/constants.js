app.constant("learningMode", [
   {
     title: "In The Beginning", difficulty: 1, 
     description: "The ^ character in a RegEx matches the beginning of a string. The \\w means match any word. Taken together, what should happen? Type ^\\w to find out.",
     stringToSearch: "The rain in spain falls mainly on the plain",
     regEx: new RegExp("^\\w",""),
     id: 1,
     attempted: false, completed: false
  },

  {
     title: "The Whole Word", difficulty: 1, 
     description: "The ^ character in a RegEx matches the beginning of a string. The \\w means match any word. Add a + after the \\w to match 1 or more of the preceding item.",
     stringToSearch: "The raindeer in spain was hit mainly by the plane",
     regEx: new RegExp("^\\w+",""),
     id: 2,
     attempted: false, completed: false
  },

  // {
  //    title: "Grabs all opening words", difficulty: 1, 
  //    description: "Using the ^ to match the beginning added with the \\w+ to match the first full word, add a gm in the flags section on the right. See what happened when you ran it?",
  //    stringToSearch: "The raindeer in spain was hit mainly by the plane \l foo",
  //    regEx: new RegExp("^\\w+","mg"),
  //    id: 3,
  //    attempted: false, completed: false
  // },

  {
     title: "Get all word-like characters", difficulty: 1, 
     description: "Putting something in brackets means match anything in the brackets. Type [\\w] and add a g flag in the right box to match everything 'globally' as in everywhere",
     stringToSearch: "Come with me if you want to live",
     regEx: new RegExp("[\\w]","g"),
     id: 3,
     attempted: false, completed: false
  },

  {
     title: "Get all word-like characters", difficulty: 1, 
     description: "Now just grab entire words. Type [\\w] then add a + after the brackets to match entire words. Keep a g flag in the right box to match everything 'globally'",
     stringToSearch: "Come with me if you want to live",
     regEx: new RegExp("[\\w]+","g"),
     id: 4,
     attempted: false, completed: false
  },

  {
     title: "Get all word-like characters", difficulty: 1, 
     description: "Now just grab the first entire word. Remember how? Type ^ for first item, then [\\w]+ after the brackets to match entire words. Keep a g flag.",
     stringToSearch: "Come with me if you want to live",
     regEx: new RegExp("^[\\w]+","g"),
     id: 5,
     attempted: false, completed: false
  },

  {
     title: "Get all word-like characters", difficulty: 1, 
     description: "Now just grab the LAST entire word. This is new! Use the same [\\w]+  to match entire words, and add a $ afterword for last item.",
     stringToSearch: "Come with me if you want to live",
     regEx: new RegExp("[\\w]+$",""),
     id: 6,
     attempted: false, completed: false
  },

  {
     title: "Mind Blown!", difficulty: 1, 
     description: "You kinda know that \\w matches any word character (alphanumberic and underscore). So it should make sense that it is THE SAME as [A-Za-z0-9_]. Type in [A-Za-z0-9_] to see the magic",
     stringToSearch: "Come with me if you want to live",
     regEx: new RegExp("[A-Za-z0-9_]",""),
     id: 7,
     attempted: false, completed: false
  },

  {
     title: "Mind Blown-er First Word!", difficulty: 1, 
     description: "Now type [A-Za-z0-9_] but add a + after. Remember, a plus matches one or more instance of the preceding token. See what happens!",
     stringToSearch: "Come with me if you want to live",
     regEx: new RegExp("[A-Za-z0-9_]+",""),
     id: 8,
     attempted: false, completed: false
  },

  {
     title: "Mind Blown-er Last Word! ", difficulty: 1, 
     description: "Now type [A-Za-z0-9_], add a + and then add a $. Remember, a plus matches one or more instance of the preceding token, a $ matches the end of the string.",
     stringToSearch: "Come with me if you want to live",
     regEx: new RegExp("[A-Za-z0-9_]+$",""),
     id: 9,
     attempted: false, completed: false
  }

]);
