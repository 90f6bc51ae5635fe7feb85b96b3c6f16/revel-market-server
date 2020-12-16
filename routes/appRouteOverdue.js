var OverdueController = require('../controllers/OverdueController');
var overdue_model = require('../models/OverdueModel');

module.exports = function (app) {
    app.post('/overdue/getOverdueBy', function (req, res) {
        OverdueController.getOverdueBy(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/overdue/getOverdueByOverdueCode', function (req, res) {
        OverdueController.getOverdueByOverdueCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/overdue/getOverdueByOverdueCodeJoinProduct', function (req, res) {
        OverdueController.getOverdueByOverdueCodeJoinProduct(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/overdue/getOverdueAndUserAndCustomere', function (req, res) {
        OverdueController.getOverdueAndUserAndCustomere(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    
    app.post('/overdue/inserOverdue', async function (req, res) {
        var result = await overdue_model.inserOverdue(req.body)
        res.send(result)
    })

    app.post('/overdue/updateOverdue', function (req, res) {
        OverdueController.updateOverdue(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/overdue/deleteOverdueByOverdueCode', function (req, res) {
        OverdueController.deleteOverdueByOverdueCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
}