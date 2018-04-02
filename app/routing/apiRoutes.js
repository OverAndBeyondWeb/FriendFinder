


function runAPI(app, data) {
  return app.route('/api/friends')
  .get(function(req, res) {
    res.json(data);
  })
  .post(function(req, res) {
    res.json(data);
  });
}


module.exports = runAPI;