var friendData = require("../data/friends");


module.exports = function (app) {

  app.get("/api/friendsList", function (req, res) {
    res.json(friendData);
  });

  app.post("/api/friendsList", function (req, res) {
    friendData.push(req.body);
    res.json(true);

  });

};