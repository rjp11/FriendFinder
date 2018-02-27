var friendData = require("../data/friends");


module.exports = function(app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
  
    app.get("/api/friendsList", function(req, res) {
      res.json(friendData);
    });
  
  
    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------
  
    app.post("/api/friendsList", function(req, res) {
      // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
      // It will do this by sending out the value "true" have a table
      // req.body is available since we're using the body-parser middleware
      // if (tableData.length < 5) {
        friendData.push(req.body);
        res.json(true);
      // }
      // else {
      //   waitListData.push(req.body);
      //   res.json(false);
      // }
    });
  
  };
  


// Friend Finder Function:

// var bestFriend = [];
// for (var i = 0; i < friends.length; i++){
//   var score = 50;
//   var diffArray = [];
//   for (var j = 0; j < surveyResponse.length; j++){
//     diffArray[j] = abs(surveyResponse[j] - friend[i].response[j]);
//     const reducer = (accumulator, currentValue) => accumulator + currentValue;
//     var scoreCheck = diffArray.reduce(reducer);
//     if (scoreCheck < score){
//       bestFriend = friend[i];
//       score = scoreCheck;
//     };

//     // after checking, store response to friend list so the user doesn't return him or herself every time. 

//   }  
// }
