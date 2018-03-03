var friendData = require("../data/friends");
var bestFriend;


module.exports = function (app) {

  app.get("/api/friendsList", function (req, res) {
    res.json(friendData);
  });

  app.post("/api/friendsList", function (req, res) {

    friendData.push(req.body);

    findFriend();

    res.json(bestFriend);

  });

};

function findFriend() {

  // initialize score value to check the difference against
  var score = 50;
  var totalFriends = friendData.length - 1;


  // double for loop 
  // first one to iterate through all of the friends data and 
  // the second to iterate through the responses of each of the friends
  // use (res.length - 1) so it doesn't say you are your own best friend
  for (var i = 0; i < totalFriends; i++) {
    var diffArray = [];

    for (var j = 0; j < 10; j++) {
      diffArray[j] = Math.abs(friendData[i].scores[j] - friendData[totalFriends].scores[j]);
    }
    const reducer = (accumulator, currentValue) => accumulator +
      currentValue;
    var scoreCheck = diffArray.reduce(reducer);
    console.log(scoreCheck);

    if (scoreCheck < score) {
      bestFriend = friendData[i];
      score = scoreCheck;
    };
  };
};