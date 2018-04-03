var friends = require('../data/friends.js');


function runAPI(app, data) {
  return app.route('/api/friends')
  .get(function(req, res) {
    res.json(data);
  })
  .post(function(req, res) {
    friends.push(req.body);
  });
}


module.exports = runAPI;