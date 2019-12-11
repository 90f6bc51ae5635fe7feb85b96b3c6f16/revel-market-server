var UserController = require('../controllers/UserController');

module.exports = function (app) {
    app.post('/user/getUserBy', function (req, res) {
        console.log('/user/getUserBy', req.body)
        UserController.getUserBy(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
}