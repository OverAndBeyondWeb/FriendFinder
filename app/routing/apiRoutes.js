var friends = require('../data/friends.js');


function runAPI(app, data) {
  return app.route('/api/friends')
  .get(function(req, res) {
    res.json(data);
  })
  .post(function(req, res) {
    var newFriend = req.body;
  
    var friendsAndScores = friends.map(function(friend, index) {
     
      var accumalitiveScore = friend.scores.reduce(function(acc, next, currentIndex) {
        var newFriendScore = parseInt(newFriend.scores[currentIndex]);
        return acc + Math.abs(next - newFriendScore);
      }, 0);
      
      return {name: friend.name, accScore: accumalitiveScore};
    });

    var sortedFriendsAndScores = friendsAndScores.sort(function(a, b) {
      return a.accScore - b.accScore;
    });

    var match = sortedFriendsAndScores[0];

    friends.push(req.body);
  });
}


module.exports = runAPI;